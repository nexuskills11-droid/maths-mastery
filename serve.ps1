# Simple HTTP server in PowerShell with MIME types mapping
$port = 8080
$root = Get-Location
Add-Type -AssemblyName System.Web
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

Write-Host "Server started at http://localhost:$port/"
Write-Host "Serving files from: $root"

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        # Clean the URL path to get file path
        # Remove query parameters/hash fragment from RawUrl
        $urlPath = $request.RawUrl
        if ($urlPath.Contains("?")) {
            $urlPath = $urlPath.Substring(0, $urlPath.IndexOf("?"))
        }
        if ($urlPath.Contains("#")) {
            $urlPath = $urlPath.Substring(0, $urlPath.IndexOf("#"))
        }
        $urlPath = [System.Web.HttpUtility]::UrlDecode($urlPath)

        $relPath = $urlPath.TrimStart("/").Replace("/", "\")
        if ([string]::IsNullOrWhiteSpace($relPath)) {
            $relPath = "index.html"
        }

        $path = Join-Path $root.Path $relPath

        if ([System.IO.File]::Exists($path)) {
            $ext = [System.IO.Path]::GetExtension($path).ToLower()
            if ($mimeTypes.ContainsKey($ext)) {
                $response.ContentType = $mimeTypes[$ext]
            } else {
                $response.ContentType = "application/octet-stream"
            }

            $buffer = [System.IO.File]::ReadAllBytes($path)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.StatusCode = 200
        } else {
            Write-Host "File not found: $path"
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 File Not Found")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    }
} catch {
    Write-Host "Error in server: $_"
} finally {
    $listener.Stop()
    Write-Host "Server stopped"
}
