// ============================================================
// Math Mastery 10 — Practice Questions Bank
// 66 questions across 10 NCERT Class 10 topics
// Distribution: 22 easy · 26 medium · 18 hard
// Type mix:     47 MCQ  · 19 numerical
// ============================================================

const questions = [

  // ──────────────────────────────────────────────────────────
  //  TOPIC 1 — REAL NUMBERS
  // ──────────────────────────────────────────────────────────

  {
    id: 1,
    topicId: 'real-numbers',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The HCF of 12 and 18 is:',
    options: ['2', '4', '6', '12'],
    answer: 2,
    solution: [
      'Step 1: Find the prime factorisation of each number.',
      'Step 2: \\(12 = 2^2 \\times 3\\)',
      'Step 3: \\(18 = 2 \\times 3^2\\)',
      'Step 4: HCF = product of the smallest powers of common prime factors = \\(2^1 \\times 3^1 = 6\\).'
    ],
    hint: 'Use prime factorisation and pick the lowest powers of common factors.'
  },
  {
    id: 2,
    topicId: 'real-numbers',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which of the following is an irrational number?',
    options: ['\\(\\frac{3}{4}\\)', '\\(\\sqrt{2}\\)', '\\(0.\\overline{3}\\)', '\\(-5\\)'],
    answer: 1,
    solution: [
      'Step 1: A rational number can be expressed in the form \\(\\frac{p}{q}\\), where \\(q \\neq 0\\).',
      'Step 2: \\(\\frac{3}{4}\\), \\(0.\\overline{3} = \\frac{1}{3}\\), and \\(-5\\) are all rational.',
      'Step 3: \\(\\sqrt{2}\\) is irrational because 2 is not a perfect square and its decimal expansion is non-terminating non-repeating.'
    ],
    hint: 'Check which number has a non-terminating, non-repeating decimal expansion.'
  },
  {
    id: 3,
    topicId: 'real-numbers',
    difficulty: 'medium',
    type: 'mcq',
    question: 'If HCF\\((a, b) = 12\\) and \\(a \\times b = 1800\\), then LCM\\((a, b)\\) is:',
    options: ['120', '150', '180', '216'],
    answer: 1,
    solution: [
      'Step 1: Use the fundamental relation: \\(\\text{HCF}(a,b) \\times \\text{LCM}(a,b) = a \\times b\\).',
      'Step 2: \\(12 \\times \\text{LCM} = 1800\\).',
      'Step 3: \\(\\text{LCM} = \\frac{1800}{12} = 150\\).'
    ],
    hint: 'Recall the relation: HCF × LCM = Product of two numbers.'
  },
  {
    id: 4,
    topicId: 'real-numbers',
    difficulty: 'medium',
    type: 'numerical',
    question: 'Find the LCM of 306 and 657 using the prime factorisation method.',
    answer: '22338',
    solution: [
      'Step 1: Prime factorise each number.',
      'Step 2: \\(306 = 2 \\times 3^2 \\times 17\\).',
      'Step 3: \\(657 = 3 \\times 3 \\times 73 = 3^2 \\times 73\\).',
      'Step 4: LCM = product of greatest powers of all prime factors.',
      'Step 5: \\(\\text{LCM} = 2 \\times 3^2 \\times 17 \\times 73 = 2 \\times 9 \\times 17 \\times 73 = 22338\\).'
    ],
    hint: 'Factorise both numbers completely, then take the highest power of every prime that appears.'
  },
  {
    id: 5,
    topicId: 'real-numbers',
    difficulty: 'hard',
    type: 'mcq',
    question: 'The decimal expansion of \\(\\frac{17}{8}\\) will terminate after how many decimal places?',
    options: ['1', '2', '3', '4'],
    answer: 2,
    solution: [
      'Step 1: A rational number \\(\\frac{p}{q}\\) has a terminating decimal if \\(q\\) can be written as \\(2^m \\times 5^n\\).',
      'Step 2: \\(8 = 2^3\\). We multiply numerator and denominator by \\(5^3 = 125\\).',
      'Step 3: \\(\\frac{17}{8} = \\frac{17 \\times 125}{8 \\times 125} = \\frac{2125}{1000} = 2.125\\).',
      'Step 4: The decimal terminates after 3 places.'
    ],
    hint: 'Express the denominator in the form \\(2^m \\times 5^n\\) and count the maximum of m and n.'
  },
  {
    id: 6,
    topicId: 'real-numbers',
    difficulty: 'hard',
    type: 'mcq',
    question: 'If two positive integers \\(a\\) and \\(b\\) are written as \\(a = x^3 y^2\\) and \\(b = x y^3\\), where \\(x\\) and \\(y\\) are prime numbers, then HCF\\((a, b)\\) is:',
    options: ['\\(x y\\)', '\\(x y^2\\)', '\\(x^3 y^3\\)', '\\(x^2 y^2\\)'],
    answer: 1,
    solution: [
      'Step 1: \\(a = x^3 y^2\\) and \\(b = x y^3\\).',
      'Step 2: HCF = product of the smallest powers of common prime factors.',
      'Step 3: For \\(x\\): min(3, 1) = 1. For \\(y\\): min(2, 3) = 2.',
      'Step 4: \\(\\text{HCF}(a, b) = x^1 \\times y^2 = x y^2\\).'
    ],
    hint: 'For HCF, pick the minimum power of each common prime factor.'
  },
  {
    id: 7,
    topicId: 'real-numbers',
    difficulty: 'medium',
    type: 'numerical',
    question: 'Find the HCF of 96 and 404 by the prime factorisation method.',
    answer: '4',
    solution: [
      'Step 1: \\(96 = 2^5 \\times 3\\).',
      'Step 2: \\(404 = 2^2 \\times 101\\).',
      'Step 3: Common prime factor is 2. Minimum power is \\(2^2 = 4\\).',
      'Step 4: HCF = 4.'
    ],
    hint: 'Break both numbers into primes and pick common factors with lowest powers.'
  },

  // ──────────────────────────────────────────────────────────
  //  TOPIC 2 — POLYNOMIALS
  // ──────────────────────────────────────────────────────────

  {
    id: 8,
    topicId: 'polynomials',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The zeroes of the polynomial \\(x^2 - 5x + 6\\) are:',
    options: ['1, 6', '2, 3', '-2, -3', '-1, 6'],
    answer: 1,
    solution: [
      'Step 1: Factorise: \\(x^2 - 5x + 6 = (x - 2)(x - 3)\\).',
      'Step 2: Set each factor to zero: \\(x - 2 = 0 \\Rightarrow x = 2\\) and \\(x - 3 = 0 \\Rightarrow x = 3\\).',
      'Step 3: The zeroes are 2 and 3.'
    ],
    hint: 'Find two numbers whose product is 6 and sum is 5.'
  },
  {
    id: 9,
    topicId: 'polynomials',
    difficulty: 'easy',
    type: 'mcq',
    question: 'If \\(\\alpha\\) and \\(\\beta\\) are zeroes of \\(x^2 + 7x + 10\\), then \\(\\alpha + \\beta\\) is:',
    options: ['7', '-7', '10', '-10'],
    answer: 1,
    solution: [
      'Step 1: For a quadratic \\(ax^2 + bx + c\\), sum of zeroes \\(= -\\frac{b}{a}\\).',
      'Step 2: Here \\(a = 1, b = 7\\).',
      'Step 3: \\(\\alpha + \\beta = -\\frac{7}{1} = -7\\).'
    ],
    hint: 'Use the relationship: sum of zeroes = \\(-b/a\\).'
  },
  {
    id: 10,
    topicId: 'polynomials',
    difficulty: 'medium',
    type: 'mcq',
    question: 'If one zero of the polynomial \\(2x^2 - 8x + k\\) is the reciprocal of the other, then the value of \\(k\\) is:',
    options: ['1', '2', '4', '8'],
    answer: 1,
    solution: [
      'Step 1: Let the zeroes be \\(\\alpha\\) and \\(\\frac{1}{\\alpha}\\).',
      'Step 2: Product of zeroes = \\(\\frac{c}{a} = \\frac{k}{2}\\).',
      'Step 3: Also, \\(\\alpha \\times \\frac{1}{\\alpha} = 1\\).',
      'Step 4: \\(\\frac{k}{2} = 1 \\Rightarrow k = 2\\).'
    ],
    hint: 'If zeroes are reciprocals of each other, their product is 1.'
  },
  {
    id: 11,
    topicId: 'polynomials',
    difficulty: 'medium',
    type: 'numerical',
    question: 'Find the sum of the zeroes of the polynomial \\(3x^2 - 12x + 9\\).',
    answer: '4',
    solution: [
      'Step 1: For \\(ax^2 + bx + c\\), sum of zeroes \\(= -\\frac{b}{a}\\).',
      'Step 2: Here \\(a = 3, b = -12\\).',
      'Step 3: Sum \\(= -\\frac{-12}{3} = \\frac{12}{3} = 4\\).'
    ],
    hint: 'Sum of zeroes of \\(ax^2+bx+c\\) is \\(-b/a\\).'
  },
  {
    id: 12,
    topicId: 'polynomials',
    difficulty: 'hard',
    type: 'mcq',
    question: 'If \\(\\alpha\\) and \\(\\beta\\) are zeroes of \\(x^2 - x - 2\\), then the value of \\(\\frac{1}{\\alpha} + \\frac{1}{\\beta}\\) is:',
    options: ['\\(\\frac{1}{2}\\)', '\\(-\\frac{1}{2}\\)', '\\(\\frac{3}{2}\\)', '\\(-\\frac{3}{2}\\)'],
    answer: 1,
    solution: [
      'Step 1: \\(\\alpha + \\beta = -\\frac{b}{a} = 1\\) and \\(\\alpha \\beta = \\frac{c}{a} = -2\\).',
      'Step 2: \\(\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha \\beta}\\).',
      'Step 3: \\(= \\frac{1}{-2} = -\\frac{1}{2}\\).'
    ],
    hint: 'Combine the fractions: \\(\\frac{1}{\\alpha}+\\frac{1}{\\beta}=\\frac{\\alpha+\\beta}{\\alpha\\beta}\\).'
  },
  {
    id: 13,
    topicId: 'polynomials',
    difficulty: 'hard',
    type: 'numerical',
    question: 'If the zeroes of the quadratic polynomial \\(x^2 + (a+1)x + b\\) are 2 and \\(-3\\), find the value of \\(a + b\\).',
    answer: '-6',
    solution: [
      'Step 1: Sum of zeroes: \\(2 + (-3) = -1\\). So \\(-(a+1) = -1 \\Rightarrow a+1 = 1 \\Rightarrow a = 0\\).',
      'Step 2: Product of zeroes: \\(2 \\times (-3) = -6\\). So \\(b = -6\\).',
      'Step 3: \\(a + b = 0 + (-6) = -6\\).'
    ],
    hint: 'Use the sum and product of zeroes relationships to find a and b separately.'
  },

  // ──────────────────────────────────────────────────────────
  //  TOPIC 3 — LINEAR EQUATIONS IN TWO VARIABLES
  // ──────────────────────────────────────────────────────────

  {
    id: 14,
    topicId: 'linear-equations',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The pair of equations \\(x + y = 5\\) and \\(2x + 2y = 10\\) has:',
    options: ['A unique solution', 'No solution', 'Infinitely many solutions', 'Exactly two solutions'],
    answer: 2,
    solution: [
      'Step 1: Write in standard form: \\(a_1/a_2 = 1/2\\), \\(b_1/b_2 = 1/2\\), \\(c_1/c_2 = 5/10 = 1/2\\).',
      'Step 2: Since \\(\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}\\), the lines are coincident.',
      'Step 3: Coincident lines have infinitely many solutions.'
    ],
    hint: 'Check the ratios \\(a_1/a_2\\), \\(b_1/b_2\\), and \\(c_1/c_2\\).'
  },
  {
    id: 15,
    topicId: 'linear-equations',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The solution of \\(x + y = 14\\) and \\(x - y = 4\\) is:',
    options: ['\\(x=10, y=4\\)', '\\(x=9, y=5\\)', '\\(x=8, y=6\\)', '\\(x=7, y=7\\)'],
    answer: 1,
    solution: [
      'Step 1: Add both equations: \\((x+y) + (x-y) = 14 + 4\\).',
      'Step 2: \\(2x = 18 \\Rightarrow x = 9\\).',
      'Step 3: Substitute: \\(9 + y = 14 \\Rightarrow y = 5\\).',
      'Step 4: Solution is \\(x = 9, y = 5\\).'
    ],
    hint: 'Add or subtract the two equations to eliminate one variable.'
  },
  {
    id: 16,
    topicId: 'linear-equations',
    difficulty: 'medium',
    type: 'mcq',
    question: 'For what value of \\(k\\), the pair \\(kx + 3y = k - 3\\) and \\(12x + ky = k\\) has no solution?',
    options: ['\\(k = 6\\)', '\\(k = -6\\)', '\\(k = 6\\) or \\(k = -6\\)', '\\(k = -6\\) only'],
    answer: 1,
    solution: [
      'Step 1: For no solution: \\(\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}\\).',
      'Step 2: \\(\\frac{k}{12} = \\frac{3}{k}\\Rightarrow k^2 = 36 \\Rightarrow k = \\pm 6\\).',
      'Step 3: Check \\(k = 6\\): \\(\\frac{6}{12} = \\frac{1}{2}\\), \\(\\frac{3}{6} = \\frac{1}{2}\\), \\(\\frac{k-3}{k} = \\frac{3}{6} = \\frac{1}{2}\\). Ratios are all equal → infinitely many solutions, not "no solution".',
      'Step 4: Check \\(k = -6\\): \\(\\frac{-6}{12} = -\\frac{1}{2}\\), \\(\\frac{3}{-6} = -\\frac{1}{2}\\), \\(\\frac{-6-3}{-6} = \\frac{-9}{-6} = \\frac{3}{2}\\). Since \\(\\frac{a_1}{a_2}=\\frac{b_1}{b_2}\\neq\\frac{c_1}{c_2}\\), no solution.',
      'Step 5: \\(k = -6\\).'
    ],
    hint: 'For no solution, the ratios of coefficients must be equal but not equal to the ratio of constants.'
  },
  {
    id: 17,
    topicId: 'linear-equations',
    difficulty: 'medium',
    type: 'numerical',
    question: 'Solve: \\(3x + 4y = 10\\) and \\(2x - 2y = 2\\). Find the value of \\(x + y\\).',
    answer: '3',
    solution: [
      'Step 1: From the second equation: \\(2x - 2y = 2 \\Rightarrow x - y = 1 \\Rightarrow x = y + 1\\).',
      'Step 2: Substitute in the first: \\(3(y+1) + 4y = 10\\).',
      'Step 3: \\(3y + 3 + 4y = 10 \\Rightarrow 7y = 7 \\Rightarrow y = 1\\).',
      'Step 4: \\(x = 1 + 1 = 2\\).',
      'Step 5: \\(x + y = 2 + 1 = 3\\).'
    ],
    hint: 'Use substitution — express x in terms of y from the simpler equation.'
  },
  {
    id: 18,
    topicId: 'linear-equations',
    difficulty: 'hard',
    type: 'mcq',
    question: 'A fraction becomes \\(\\frac{1}{3}\\) when 1 is subtracted from the numerator and it becomes \\(\\frac{1}{4}\\) when 8 is added to its denominator. The fraction is:',
    options: ['\\(\\frac{5}{12}\\)', '\\(\\frac{4}{12}\\)', '\\(\\frac{5}{16}\\)', '\\(\\frac{3}{12}\\)'],
    answer: 0,
    solution: [
      'Step 1: Let the fraction be \\(\\frac{x}{y}\\).',
      'Step 2: \\(\\frac{x-1}{y} = \\frac{1}{3} \\Rightarrow 3x - 3 = y \\Rightarrow 3x - y = 3\\) ... (i)',
      'Step 3: \\(\\frac{x}{y+8} = \\frac{1}{4} \\Rightarrow 4x = y + 8 \\Rightarrow 4x - y = 8\\) ... (ii)',
      'Step 4: Subtract (i) from (ii): \\(x = 5\\).',
      'Step 5: Substitute: \\(3(5) - y = 3 \\Rightarrow y = 12\\).',
      'Step 6: The fraction is \\(\\frac{5}{12}\\).'
    ],
    hint: 'Set up two equations using the two conditions on the fraction.'
  },
  {
    id: 19,
    topicId: 'linear-equations',
    difficulty: 'hard',
    type: 'numerical',
    question: 'The sum of a two-digit number and the number obtained by reversing the digits is 66. If the digits differ by 2, find the number. (Give the larger answer.)',
    answer: '42',
    solution: [
      'Step 1: Let the ten\'s digit be \\(x\\) and unit\'s digit be \\(y\\).',
      'Step 2: Number = \\(10x + y\\). Reversed number = \\(10y + x\\).',
      'Step 3: \\((10x+y)+(10y+x) = 66 \\Rightarrow 11x + 11y = 66 \\Rightarrow x + y = 6\\).',
      'Step 4: \\(x - y = 2\\) (given the digits differ by 2).',
      'Step 5: Solving: \\(x = 4, y = 2\\). The number is 42 (or 24 if \\(y-x=2\\)).',
      'Step 6: The larger number is 42.'
    ],
    hint: 'Express the two-digit number as \\(10x + y\\) and set up equations for the sum and digit difference.'
  },

  // ──────────────────────────────────────────────────────────
  //  TOPIC 4 — QUADRATIC EQUATIONS
  // ──────────────────────────────────────────────────────────

  {
    id: 20,
    topicId: 'quadratic-equations',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The roots of the equation \\(x^2 - 7x + 12 = 0\\) are:',
    options: ['2 and 6', '3 and 4', '-3 and -4', '1 and 12'],
    answer: 1,
    solution: [
      'Step 1: Factorise: \\(x^2 - 7x + 12 = (x-3)(x-4)\\).',
      'Step 2: \\(x - 3 = 0 \\Rightarrow x = 3\\) and \\(x - 4 = 0 \\Rightarrow x = 4\\).',
      'Step 3: Roots are 3 and 4.'
    ],
    hint: 'Find two numbers that multiply to 12 and add to 7.'
  },
  {
    id: 21,
    topicId: 'quadratic-equations',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The discriminant of \\(2x^2 - 4x + 3 = 0\\) is:',
    options: ['\\(-8\\)', '\\(8\\)', '\\(4\\)', '\\(-4\\)'],
    answer: 0,
    solution: [
      'Step 1: Discriminant \\(D = b^2 - 4ac\\).',
      'Step 2: \\(a = 2, b = -4, c = 3\\).',
      'Step 3: \\(D = (-4)^2 - 4(2)(3) = 16 - 24 = -8\\).'
    ],
    hint: 'Use \\(D = b^2 - 4ac\\).'
  },
  {
    id: 22,
    topicId: 'quadratic-equations',
    difficulty: 'medium',
    type: 'mcq',
    question: 'The nature of roots of \\(3x^2 - 4\\sqrt{3}x + 4 = 0\\) is:',
    options: ['Real and distinct', 'Real and equal', 'No real roots', 'Cannot be determined'],
    answer: 1,
    solution: [
      'Step 1: \\(D = b^2 - 4ac = (-4\\sqrt{3})^2 - 4(3)(4)\\).',
      'Step 2: \\(D = 48 - 48 = 0\\).',
      'Step 3: Since \\(D = 0\\), the roots are real and equal.'
    ],
    hint: 'Calculate the discriminant. If \\(D = 0\\), roots are real and equal.'
  },
  {
    id: 23,
    topicId: 'quadratic-equations',
    difficulty: 'medium',
    type: 'numerical',
    question: 'Find the positive root of \\(2x^2 + x - 6 = 0\\).',
    answer: '1.5',
    solution: [
      'Step 1: Factorise: \\(2x^2 + x - 6 = 2x^2 + 4x - 3x - 6\\).',
      'Step 2: \\(= 2x(x + 2) - 3(x + 2) = (2x - 3)(x + 2)\\).',
      'Step 3: \\(2x - 3 = 0 \\Rightarrow x = \\frac{3}{2} = 1.5\\).',
      'Step 4: \\(x + 2 = 0 \\Rightarrow x = -2\\).',
      'Step 5: The positive root is 1.5.'
    ],
    hint: 'Factorise and find both roots, then pick the positive one.'
  },
  {
    id: 24,
    topicId: 'quadratic-equations',
    difficulty: 'hard',
    type: 'mcq',
    question: 'If the equation \\(x^2 + 2(k+2)x + 9k = 0\\) has equal roots, then the values of \\(k\\) are:',
    options: ['1 or 4', '2 or 3', '1 or 5', '4 or 5'],
    answer: 0,
    solution: [
      'Step 1: For equal roots, \\(D = 0\\).',
      'Step 2: \\(D = [2(k+2)]^2 - 4(1)(9k) = 0\\).',
      'Step 3: \\(4(k+2)^2 - 36k = 0\\).',
      'Step 4: \\(4(k^2 + 4k + 4) - 36k = 0\\).',
      'Step 5: \\(4k^2 + 16k + 16 - 36k = 0 \\Rightarrow 4k^2 - 20k + 16 = 0\\).',
      'Step 6: \\(k^2 - 5k + 4 = 0 \\Rightarrow (k-1)(k-4) = 0\\).',
      'Step 7: \\(k = 1\\) or \\(k = 4\\).'
    ],
    hint: 'Set discriminant = 0 and solve the resulting equation in k.'
  },
  {
    id: 25,
    topicId: 'quadratic-equations',
    difficulty: 'hard',
    type: 'numerical',
    question: 'Using the quadratic formula, find the sum of the roots of \\(5x^2 - 13x + 6 = 0\\).',
    answer: '2.6',
    solution: [
      'Step 1: For \\(ax^2 + bx + c = 0\\), sum of roots \\(= -\\frac{b}{a}\\).',
      'Step 2: \\(a = 5, b = -13\\).',
      'Step 3: Sum of roots \\(= -\\frac{-13}{5} = \\frac{13}{5} = 2.6\\).'
    ],
    hint: 'Sum of roots = \\(-b/a\\). No need to find individual roots.'
  },
  {
    id: 26,
    topicId: 'quadratic-equations',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which of the following equations has two distinct real roots?',
    options: [
      '\\(x^2 - 2x + 1 = 0\\)',
      '\\(x^2 + x + 1 = 0\\)',
      '\\(x^2 - 3x + 2 = 0\\)',
      '\\(2x^2 - 6x + 9 = 0\\)'
    ],
    answer: 2,
    solution: [
      'Step 1: Check discriminant for each.',
      'Step 2: (A) \\(D = 4-4 = 0\\) → equal roots.',
      'Step 3: (B) \\(D = 1-4 = -3\\) → no real roots.',
      'Step 4: (C) \\(D = 9-8 = 1 > 0\\) → two distinct real roots. ✓',
      'Step 5: (D) \\(D = 36-72 = -36\\) → no real roots.'
    ],
    hint: 'Two distinct real roots means \\(D > 0\\).'
  },

  // ──────────────────────────────────────────────────────────
  //  TOPIC 5 — ARITHMETIC PROGRESSIONS
  // ──────────────────────────────────────────────────────────

  {
    id: 27,
    topicId: 'arithmetic-progressions',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The 10th term of the AP \\(2, 7, 12, 17, \\ldots\\) is:',
    options: ['42', '47', '52', '57'],
    answer: 1,
    solution: [
      'Step 1: First term \\(a = 2\\), common difference \\(d = 7 - 2 = 5\\).',
      'Step 2: \\(a_n = a + (n-1)d\\).',
      'Step 3: \\(a_{10} = 2 + 9 \\times 5 = 2 + 45 = 47\\).'
    ],
    hint: 'Use the formula \\(a_n = a + (n-1)d\\).'
  },
  {
    id: 28,
    topicId: 'arithmetic-progressions',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The common difference of the AP \\(3, 1, -1, -3, \\ldots\\) is:',
    options: ['2', '-2', '3', '-3'],
    answer: 1,
    solution: [
      'Step 1: Common difference \\(d = a_2 - a_1 = 1 - 3 = -2\\).',
      'Step 2: Verify: \\(-1 - 1 = -2\\). ✓'
    ],
    hint: 'Subtract any term from the next term.'
  },
  {
    id: 29,
    topicId: 'arithmetic-progressions',
    difficulty: 'medium',
    type: 'numerical',
    question: 'Find the sum of the first 20 terms of the AP \\(1, 4, 7, 10, \\ldots\\)',
    answer: '590',
    solution: [
      'Step 1: \\(a = 1, d = 3, n = 20\\).',
      'Step 2: \\(S_n = \\frac{n}{2}[2a + (n-1)d]\\).',
      'Step 3: \\(S_{20} = \\frac{20}{2}[2(1) + 19(3)] = 10[2 + 57] = 10 \\times 59 = 590\\).'
    ],
    hint: 'Use \\(S_n = \\frac{n}{2}[2a + (n-1)d]\\).'
  },
  {
    id: 30,
    topicId: 'arithmetic-progressions',
    difficulty: 'medium',
    type: 'mcq',
    question: 'How many terms of the AP \\(9, 17, 25, \\ldots\\) must be taken to give a sum of 636?',
    options: ['10', '11', '12', '13'],
    answer: 2,
    solution: [
      'Step 1: \\(a = 9, d = 8, S_n = 636\\).',
      'Step 2: \\(S_n = \\frac{n}{2}[2a + (n-1)d]\\).',
      'Step 3: \\(636 = \\frac{n}{2}[18 + 8(n-1)] = \\frac{n}{2}[18 + 8n - 8] = \\frac{n}{2}[10 + 8n]\\).',
      'Step 4: \\(1272 = n(10 + 8n) = 10n + 8n^2\\).',
      'Step 5: \\(8n^2 + 10n - 1272 = 0 \\Rightarrow 4n^2 + 5n - 636 = 0\\).',
      'Step 6: Using the quadratic formula or factoring: \\(n = 12\\) (rejecting the negative root).'
    ],
    hint: 'Set up the sum formula equal to 636 and solve for n.'
  },
  {
    id: 31,
    topicId: 'arithmetic-progressions',
    difficulty: 'hard',
    type: 'mcq',
    question: 'If the 3rd and 9th terms of an AP are 4 and \\(-8\\) respectively, which term of this AP is zero?',
    options: ['4th', '5th', '6th', '7th'],
    answer: 1,
    solution: [
      'Step 1: \\(a_3 = a + 2d = 4\\) ... (i) and \\(a_9 = a + 8d = -8\\) ... (ii).',
      'Step 2: Subtract (i) from (ii): \\(6d = -12 \\Rightarrow d = -2\\).',
      'Step 3: From (i): \\(a + 2(-2) = 4 \\Rightarrow a = 8\\).',
      'Step 4: Let \\(a_n = 0\\): \\(8 + (n-1)(-2) = 0 \\Rightarrow 8 - 2n + 2 = 0 \\Rightarrow 10 = 2n \\Rightarrow n = 5\\).',
      'Step 5: The 5th term is zero.'
    ],
    hint: 'Find a and d first using the two given terms, then find which term equals zero.'
  },
  {
    id: 32,
    topicId: 'arithmetic-progressions',
    difficulty: 'hard',
    type: 'numerical',
    question: 'Find the sum of all two-digit odd positive numbers.',
    answer: '2475',
    solution: [
      'Step 1: Two-digit odd numbers: \\(11, 13, 15, \\ldots, 99\\).',
      'Step 2: \\(a = 11, d = 2, a_n = 99\\).',
      'Step 3: \\(99 = 11 + (n-1) \\times 2 \\Rightarrow 88 = 2(n-1) \\Rightarrow n = 45\\).',
      'Step 4: \\(S_{45} = \\frac{45}{2}(11 + 99) = \\frac{45}{2} \\times 110 = 45 \\times 55 = 2475\\).'
    ],
    hint: 'The two-digit odd numbers form an AP: 11, 13, 15, ..., 99.'
  },

  // ──────────────────────────────────────────────────────────
  //  TOPIC 6 — TRIANGLES (Similarity)
  // ──────────────────────────────────────────────────────────

  {
    id: 33,
    topicId: 'triangles',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In two similar triangles, the ratio of their corresponding sides is \\(2:3\\). The ratio of their areas is:',
    options: ['\\(2:3\\)', '\\(4:9\\)', '\\(8:27\\)', '\\(3:2\\)'],
    answer: 1,
    solution: [
      'Step 1: The ratio of areas of similar triangles = square of the ratio of corresponding sides.',
      'Step 2: \\(\\frac{\\text{Area}_1}{\\text{Area}_2} = \\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}\\).',
      'Step 3: The ratio is \\(4:9\\).'
    ],
    hint: 'Area ratio = (side ratio)².'
  },
  {
    id: 34,
    topicId: 'triangles',
    difficulty: 'easy',
    type: 'mcq',
    question: 'If \\(\\triangle ABC \\sim \\triangle DEF\\) and \\(AB = 4\\) cm, \\(DE = 6\\) cm, \\(EF = 9\\) cm, then \\(BC\\) is equal to:',
    options: ['4 cm', '6 cm', '8 cm', '12 cm'],
    answer: 1,
    solution: [
      'Step 1: Since \\(\\triangle ABC \\sim \\triangle DEF\\), \\(\\frac{AB}{DE} = \\frac{BC}{EF}\\).',
      'Step 2: \\(\\frac{4}{6} = \\frac{BC}{9}\\).',
      'Step 3: \\(BC = \\frac{4 \\times 9}{6} = 6\\) cm.'
    ],
    hint: 'Corresponding sides of similar triangles are proportional.'
  },
  {
    id: 35,
    topicId: 'triangles',
    difficulty: 'medium',
    type: 'mcq',
    question: 'In \\(\\triangle ABC\\), \\(DE \\parallel BC\\), \\(AD = 3\\) cm, \\(DB = 5\\) cm and \\(AE = 6\\) cm. Then \\(EC\\) is:',
    options: ['8 cm', '10 cm', '12 cm', '15 cm'],
    answer: 1,
    solution: [
      'Step 1: By the Basic Proportionality Theorem (Thales\' theorem): \\(\\frac{AD}{DB} = \\frac{AE}{EC}\\).',
      'Step 2: \\(\\frac{3}{5} = \\frac{6}{EC}\\).',
      'Step 3: \\(EC = \\frac{6 \\times 5}{3} = 10\\) cm.'
    ],
    hint: 'Apply BPT: If a line is drawn parallel to one side of a triangle, it divides the other two sides proportionally.'
  },
  {
    id: 36,
    topicId: 'triangles',
    difficulty: 'medium',
    type: 'numerical',
    question: 'The sides of two similar triangles are in the ratio \\(3:5\\). If the area of the smaller triangle is 36 cm², find the area of the larger triangle.',
    answer: '100',
    solution: [
      'Step 1: Ratio of areas = (ratio of sides)² = \\((3/5)^2 = 9/25\\).',
      'Step 2: \\(\\frac{36}{\\text{Area}_2} = \\frac{9}{25}\\).',
      'Step 3: \\(\\text{Area}_2 = \\frac{36 \\times 25}{9} = 100\\) cm².'
    ],
    hint: 'Ratio of areas of similar triangles equals the square of the ratio of their corresponding sides.'
  },
  {
    id: 37,
    topicId: 'triangles',
    difficulty: 'hard',
    type: 'mcq',
    question: 'In a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides. If the sides of a triangle are 6 cm, 8 cm, and 10 cm, the triangle is:',
    options: ['Acute angled', 'Right angled', 'Obtuse angled', 'Equilateral'],
    answer: 1,
    solution: [
      'Step 1: Check: \\(10^2 = 100\\).',
      'Step 2: \\(6^2 + 8^2 = 36 + 64 = 100\\).',
      'Step 3: Since \\(10^2 = 6^2 + 8^2\\), by the converse of the Pythagoras theorem, the triangle is right-angled.'
    ],
    hint: 'Check if the square of the longest side equals the sum of squares of the other two.'
  },
  {
    id: 38,
    topicId: 'triangles',
    difficulty: 'hard',
    type: 'numerical',
    question: 'In \\(\\triangle ABC\\), \\(\\angle B = 90°\\), \\(AB = 5\\) cm and \\(AC = 13\\) cm. Find \\(BC\\) in cm.',
    answer: '12',
    solution: [
      'Step 1: By Pythagoras theorem: \\(AC^2 = AB^2 + BC^2\\).',
      'Step 2: \\(13^2 = 5^2 + BC^2\\).',
      'Step 3: \\(169 = 25 + BC^2\\).',
      'Step 4: \\(BC^2 = 144 \\Rightarrow BC = 12\\) cm.'
    ],
    hint: 'Apply the Pythagoras theorem: Hypotenuse² = Base² + Height².'
  },

  // ──────────────────────────────────────────────────────────
  //  TOPIC 7 — CIRCLES
  // ──────────────────────────────────────────────────────────

  {
    id: 39,
    topicId: 'circles',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A tangent to a circle is perpendicular to the radius at the point of contact. If the radius is 5 cm and the distance of the centre from the external point is 13 cm, the length of the tangent is:',
    options: ['8 cm', '10 cm', '12 cm', '14 cm'],
    answer: 2,
    solution: [
      'Step 1: Let O be centre, P be external point, T be point of tangency.',
      'Step 2: \\(OT \\perp PT\\), so \\(\\triangle OTP\\) is right-angled at T.',
      'Step 3: \\(PT = \\sqrt{OP^2 - OT^2} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\) cm.'
    ],
    hint: 'Use Pythagoras theorem in the right triangle formed by the radius, tangent, and the line from centre to the external point.'
  },
  {
    id: 40,
    topicId: 'circles',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The number of tangents that can be drawn from an external point to a circle is:',
    options: ['1', '2', '3', 'Infinite'],
    answer: 1,
    solution: [
      'Step 1: From an external point, exactly two tangents can be drawn to a circle.',
      'Step 2: These two tangents are equal in length.'
    ],
    hint: 'Think about how many lines from a point outside can just touch the circle.'
  },
  {
    id: 41,
    topicId: 'circles',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Two tangents TP and TQ are drawn from an external point T to a circle with centre O. If \\(\\angle PTQ = 60°\\), then \\(\\angle POQ\\) is:',
    options: ['90°', '100°', '110°', '120°'],
    answer: 3,
    solution: [
      'Step 1: \\(\\angle OPT = \\angle OQT = 90°\\) (radius ⊥ tangent).',
      'Step 2: In quadrilateral OPTQ: \\(\\angle OPT + \\angle PTQ + \\angle OQT + \\angle POQ = 360°\\).',
      'Step 3: \\(90° + 60° + 90° + \\angle POQ = 360°\\).',
      'Step 4: \\(\\angle POQ = 360° - 240° = 120°\\).'
    ],
    hint: 'Use the property that angles in quadrilateral OPTQ sum to 360°.'
  },
  {
    id: 42,
    topicId: 'circles',
    difficulty: 'medium',
    type: 'numerical',
    question: 'PA and PB are tangents from point P to a circle with centre O. If PA = 8 cm and OP = 10 cm, find the radius of the circle in cm.',
    answer: '6',
    solution: [
      'Step 1: OA ⊥ PA (radius perpendicular to tangent).',
      'Step 2: In right \\(\\triangle OAP\\): \\(OP^2 = OA^2 + PA^2\\).',
      'Step 3: \\(10^2 = OA^2 + 8^2\\).',
      'Step 4: \\(100 = OA^2 + 64 \\Rightarrow OA^2 = 36 \\Rightarrow OA = 6\\) cm.'
    ],
    hint: 'The tangent and radius form a right angle at the point of contact.'
  },
  {
    id: 43,
    topicId: 'circles',
    difficulty: 'hard',
    type: 'mcq',
    question: 'A circle touches all four sides of a quadrilateral ABCD. If \\(AB = 6\\) cm, \\(BC = 7\\) cm, and \\(CD = 4\\) cm, then \\(AD\\) is:',
    options: ['2 cm', '3 cm', '4 cm', '5 cm'],
    answer: 1,
    solution: [
      'Step 1: For a quadrilateral circumscribing a circle: \\(AB + CD = BC + AD\\).',
      'Step 2: \\(6 + 4 = 7 + AD\\).',
      'Step 3: \\(10 = 7 + AD \\Rightarrow AD = 3\\) cm.'
    ],
    hint: 'For a quadrilateral circumscribing a circle, the sum of opposite sides are equal.'
  },
  {
    id: 44,
    topicId: 'circles',
    difficulty: 'hard',
    type: 'mcq',
    question: 'If the angle between two radii of a circle is \\(130°\\), then the angle between the tangents at the ends of those radii is:',
    options: ['40°', '50°', '60°', '70°'],
    answer: 1,
    solution: [
      'Step 1: Let the two radii make angle \\(\\angle AOB = 130°\\) at centre O.',
      'Step 2: Tangents at A and B meet at P. In quad OAPB: \\(\\angle OAP = \\angle OBP = 90°\\).',
      'Step 3: \\(\\angle AOB + \\angle OAP + \\angle APB + \\angle OBP = 360°\\).',
      'Step 4: \\(130° + 90° + \\angle APB + 90° = 360°\\).',
      'Step 5: \\(\\angle APB = 360° - 310° = 50°\\).'
    ],
    hint: 'The angle between tangents and the angle between radii at the centre are supplementary parts of the quadrilateral formed.'
  },

  // ──────────────────────────────────────────────────────────
  //  TOPIC 8 — TRIGONOMETRY
  // ──────────────────────────────────────────────────────────

  {
    id: 45,
    topicId: 'trigonometry',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The value of \\(\\sin 30° + \\cos 60°\\) is:',
    options: ['0', '1', '\\(\\frac{1}{2}\\)', '\\(\\frac{3}{2}\\)'],
    answer: 1,
    solution: [
      'Step 1: \\(\\sin 30° = \\frac{1}{2}\\) and \\(\\cos 60° = \\frac{1}{2}\\).',
      'Step 2: \\(\\sin 30° + \\cos 60° = \\frac{1}{2} + \\frac{1}{2} = 1\\).'
    ],
    hint: 'Recall the standard values: \\(\\sin 30° = \\cos 60° = 1/2\\).'
  },
  {
    id: 46,
    topicId: 'trigonometry',
    difficulty: 'easy',
    type: 'mcq',
    question: 'If \\(\\tan \\theta = \\frac{3}{4}\\), then \\(\\sin \\theta\\) is:',
    options: ['\\(\\frac{3}{4}\\)', '\\(\\frac{3}{5}\\)', '\\(\\frac{4}{5}\\)', '\\(\\frac{4}{3}\\)'],
    answer: 1,
    solution: [
      'Step 1: \\(\\tan \\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{3}{4}\\).',
      'Step 2: Hypotenuse \\(= \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5\\).',
      'Step 3: \\(\\sin \\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{3}{5}\\).'
    ],
    hint: 'Find the hypotenuse using Pythagoras theorem, then compute sin.'
  },
  {
    id: 47,
    topicId: 'trigonometry',
    difficulty: 'medium',
    type: 'mcq',
    question: 'The value of \\(\\frac{\\tan 45°}{\\sin 30° + \\cos 30°}\\) is:',
    options: [
      '\\(\\frac{2}{1+\\sqrt{3}}\\)',
      '\\(\\frac{2}{\\sqrt{3}-1}\\)',
      '\\(\\frac{1}{\\sqrt{3}+1}\\)',
      '\\(\\frac{\\sqrt{3}}{2}\\)'
    ],
    answer: 0,
    solution: [
      'Step 1: \\(\\tan 45° = 1\\), \\(\\sin 30° = \\frac{1}{2}\\), \\(\\cos 30° = \\frac{\\sqrt{3}}{2}\\).',
      'Step 2: \\(\\frac{1}{\\frac{1}{2} + \\frac{\\sqrt{3}}{2}} = \\frac{1}{\\frac{1+\\sqrt{3}}{2}} = \\frac{2}{1+\\sqrt{3}}\\).'
    ],
    hint: 'Substitute standard trigonometric values and simplify.'
  },
  {
    id: 48,
    topicId: 'trigonometry',
    difficulty: 'medium',
    type: 'mcq',
    question: 'If \\(\\sin A = \\cos B\\), then \\(A + B\\) equals:',
    options: ['45°', '60°', '90°', '180°'],
    answer: 2,
    solution: [
      'Step 1: \\(\\sin A = \\cos B\\).',
      'Step 2: We know \\(\\cos B = \\sin(90° - B)\\).',
      'Step 3: So \\(\\sin A = \\sin(90° - B)\\), which gives \\(A = 90° - B\\).',
      'Step 4: \\(A + B = 90°\\).'
    ],
    hint: 'Use the complementary angle identity: \\(\\sin \\theta = \\cos(90° - \\theta)\\).'
  },
  {
    id: 49,
    topicId: 'trigonometry',
    difficulty: 'hard',
    type: 'mcq',
    question: 'The value of \\(\\sin^2 60° + \\cos^2 60° + 2\\tan 45° - \\tan^2 60° + \\cos^2 45°\\) is:',
    options: ['\\(\\frac{1}{2}\\)', '\\(\\frac{3}{2}\\)', '\\(1\\)', '\\(\\frac{5}{2}\\)'],
    answer: 0,
    solution: [
      'Step 1: \\(\\sin^2 60° = \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{3}{4}\\).',
      'Step 2: \\(\\cos^2 60° = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}\\).',
      'Step 3: \\(\\tan 45° = 1\\), so \\(2\\tan 45° = 2\\).',
      'Step 4: \\(\\tan^2 60° = (\\sqrt{3})^2 = 3\\).',
      'Step 5: \\(\\cos^2 45° = \\left(\\frac{1}{\\sqrt{2}}\\right)^2 = \\frac{1}{2}\\).',
      'Step 6: Total \\(= \\frac{3}{4} + \\frac{1}{4} + 2 - 3 + \\frac{1}{2} = 1 + 2 - 3 + \\frac{1}{2} = \\frac{1}{2}\\).'
    ],
    hint: 'Substitute all standard values carefully and compute step by step.'
  },
  {
    id: 50,
    topicId: 'trigonometry',
    difficulty: 'hard',
    type: 'numerical',
    question: 'If \\(\\sec \\theta = \\frac{13}{5}\\), find the value of \\(5 \\sin \\theta + 12 \\cos \\theta\\). Give answer as a decimal rounded to 2 places.',
    answer: '9.23',
    solution: [
      'Step 1: \\(\\sec \\theta = \\frac{13}{5}\\), so \\(\\cos \\theta = \\frac{5}{13}\\).',
      'Step 2: \\(\\sin \\theta = \\sqrt{1-\\cos^2\\theta} = \\sqrt{1-\\frac{25}{169}} = \\sqrt{\\frac{144}{169}} = \\frac{12}{13}\\).',
      'Step 3: \\(5 \\sin \\theta + 12 \\cos \\theta = 5 \\times \\frac{12}{13} + 12 \\times \\frac{5}{13}\\).',
      'Step 4: \\(= \\frac{60}{13} + \\frac{60}{13} = \\frac{120}{13} \\approx 9.23\\).'
    ],
    hint: 'Find sin θ and cos θ from sec θ, then substitute.'
  },
  {
    id: 51,
    topicId: 'trigonometry',
    difficulty: 'medium',
    type: 'numerical',
    question: 'Find the value of \\(2\\tan^2 45° + \\cos^2 30° - \\sin^2 60°\\).',
    answer: '2',
    solution: [
      'Step 1: \\(\\tan^2 45° = 1\\), so \\(2\\tan^2 45° = 2\\).',
      'Step 2: \\(\\cos^2 30° = \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{3}{4}\\).',
      'Step 3: \\(\\sin^2 60° = \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{3}{4}\\).',
      'Step 4: \\(2 + \\frac{3}{4} - \\frac{3}{4} = 2\\).'
    ],
    hint: 'Note that \\(\\cos 30° = \\sin 60°\\), so those terms cancel!'
  },

  // ──────────────────────────────────────────────────────────
  //  TOPIC 9 — COORDINATE GEOMETRY
  // ──────────────────────────────────────────────────────────

  {
    id: 52,
    topicId: 'coordinate-geometry',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The distance between the points \\((3, 4)\\) and \\((0, 0)\\) is:',
    options: ['3', '4', '5', '7'],
    answer: 2,
    solution: [
      'Step 1: Distance formula: \\(d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}\\).',
      'Step 2: \\(d = \\sqrt{(3-0)^2 + (4-0)^2} = \\sqrt{9+16} = \\sqrt{25} = 5\\).'
    ],
    hint: 'Apply the distance formula between the two points.'
  },
  {
    id: 53,
    topicId: 'coordinate-geometry',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The midpoint of the line segment joining \\((2, 3)\\) and \\((4, 7)\\) is:',
    options: ['\\((3, 5)\\)', '\\((2, 5)\\)', '\\((3, 7)\\)', '\\((6, 10)\\)'],
    answer: 0,
    solution: [
      'Step 1: Midpoint \\(= \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)\\).',
      'Step 2: \\(= \\left(\\frac{2+4}{2}, \\frac{3+7}{2}\\right) = (3, 5)\\).'
    ],
    hint: 'Average the x-coordinates and average the y-coordinates.'
  },
  {
    id: 54,
    topicId: 'coordinate-geometry',
    difficulty: 'medium',
    type: 'numerical',
    question: 'Find the distance between the points \\((-5, 7)\\) and \\((-1, 3)\\).',
    answer: '5.66',
    solution: [
      'Step 1: \\(d = \\sqrt{(-1-(-5))^2 + (3-7)^2}\\).',
      'Step 2: \\(= \\sqrt{(4)^2 + (-4)^2} = \\sqrt{16+16} = \\sqrt{32}\\).',
      'Step 3: \\(= 4\\sqrt{2} \\approx 5.66\\).'
    ],
    hint: 'Use the distance formula. Simplify the square root.'
  },
  {
    id: 55,
    topicId: 'coordinate-geometry',
    difficulty: 'medium',
    type: 'mcq',
    question: 'The point which divides the line segment joining \\((1, -2)\\) and \\((4, 7)\\) in the ratio \\(2:1\\) internally is:',
    options: ['\\((2, 1)\\)', '\\((3, 4)\\)', '\\((3, 1)\\)', '\\((2, 4)\\)'],
    answer: 1,
    solution: [
      'Step 1: Section formula: \\(\\left(\\frac{m x_2 + n x_1}{m+n}, \\frac{m y_2 + n y_1}{m+n}\\right)\\).',
      'Step 2: \\(x = \\frac{2(4)+1(1)}{2+1} = \\frac{8+1}{3} = 3\\).',
      'Step 3: \\(y = \\frac{2(7)+1(-2)}{2+1} = \\frac{14-2}{3} = 4\\).',
      'Step 4: The point is \\((3, 4)\\).'
    ],
    hint: 'Use the section formula for internal division.'
  },
  {
    id: 56,
    topicId: 'coordinate-geometry',
    difficulty: 'hard',
    type: 'mcq',
    question: 'The area of the triangle formed by the points \\((0, 0)\\), \\((4, 0)\\) and \\((0, 3)\\) is:',
    options: ['6 sq. units', '7 sq. units', '12 sq. units', '24 sq. units'],
    answer: 0,
    solution: [
      'Step 1: Area \\(= \\frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|\\).',
      'Step 2: \\(= \\frac{1}{2}|0(0-3) + 4(3-0) + 0(0-0)|\\).',
      'Step 3: \\(= \\frac{1}{2}|0 + 12 + 0| = \\frac{12}{2} = 6\\) sq. units.'
    ],
    hint: 'Use the coordinate geometry area formula for a triangle.'
  },
  {
    id: 57,
    topicId: 'coordinate-geometry',
    difficulty: 'hard',
    type: 'numerical',
    question: 'Find the value of \\(k\\) if the points \\((2, 1)\\), \\((k, 5)\\) and \\((5, 7)\\) are collinear.',
    answer: '3.5',
    solution: [
      'Step 1: For collinear points, the area of the triangle formed = 0.',
      'Step 2: \\(\\frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)| = 0\\).',
      'Step 3: \\(|2(5-7) + k(7-1) + 5(1-5)| = 0\\).',
      'Step 4: \\(|2(-2) + 6k + 5(-4)| = 0\\).',
      'Step 5: \\(|-4 + 6k - 20| = 0 \\Rightarrow |6k - 24| = 0\\).',
      'Step 6: \\(6k = 24 \\Rightarrow k = 4\\).'
    ],
    hint: 'Three points are collinear when the area of the triangle they form is zero.'
  },
  {
    id: 58,
    topicId: 'coordinate-geometry',
    difficulty: 'medium',
    type: 'numerical',
    question: 'Find the coordinates of the point which divides the join of \\((-1, 7)\\) and \\((4, -3)\\) in the ratio \\(2:3\\). Give the x-coordinate.',
    answer: '1',
    solution: [
      'Step 1: \\(x = \\frac{2(4)+3(-1)}{2+3} = \\frac{8-3}{5} = \\frac{5}{5} = 1\\).',
      'Step 2: The x-coordinate is 1.'
    ],
    hint: 'Use the section formula.'
  },

  // ──────────────────────────────────────────────────────────
  //  TOPIC 10 — SURFACE AREAS & VOLUMES
  // ──────────────────────────────────────────────────────────

  {
    id: 59,
    topicId: 'surface-areas-volumes',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Find the curved surface area of a cylinder of radius 7 cm and height 10 cm. (Use \\(\\pi = \\frac{22}{7}\\))',
    options: ['220 cm²', '440 cm²', '660 cm²', '880 cm²'],
    answer: 1,
    solution: [
      'Step 1: Formula for CSA of cylinder is \\(2\\pi rh\\).',
      'Step 2: Substitute values: \\(2 \\times \\frac{22}{7} \\times 7 \\times 10\\).',
      'Step 3: \\(2 \\times 22 \\times 10 = 440\\) cm².'
    ],
    hint: 'Use the formula \\(2\\pi rh\\).'
  },
  {
    id: 60,
    topicId: 'surface-areas-volumes',
    difficulty: 'medium',
    type: 'mcq',
    question: 'The volume of a sphere is \\(36\\pi\\) cm³. Its radius is:',
    options: ['2 cm', '3 cm', '4 cm', '6 cm'],
    answer: 1,
    solution: [
      'Step 1: Formula for volume of a sphere is \\(\\frac{4}{3}\\pi r^3\\).',
      'Step 2: Given \\(\\frac{4}{3}\\pi r^3 = 36\\pi \\Rightarrow \\frac{4}{3}r^3 = 36\\).',
      'Step 3: \\(r^3 = 36 \\times \\frac{3}{4} = 27\\).',
      'Step 4: \\(r = \\sqrt[3]{27} = 3\\) cm.'
    ],
    hint: 'Equate the volume formula \\(\\frac{4}{3}\\pi r^3\\) to \\(36\\pi\\) and solve for r.'
  },
  {
    id: 61,
    topicId: 'surface-areas-volumes',
    difficulty: 'hard',
    type: 'numerical',
    question: 'A solid toy is in the form of a hemisphere surmounted by a right circular cone. If the height of the cone is 4 cm and the diameter of its base is 6 cm, find the volume of the toy in cm³. (Use \\(\\pi = 3.14\\))',
    answer: '94.2',
    solution: [
      'Step 1: Base radius \\(r = \\frac{6}{2} = 3\\) cm.',
      'Step 2: Volume of cone = \\(\\frac{1}{3}\\pi r^2 h = \\frac{1}{3} \\times 3.14 \\times 9 \\times 4 = 37.68\\) cm³.',
      'Step 3: Volume of hemisphere = \\(\\frac{2}{3}\\pi r^3 = \\frac{2}{3} \\times 3.14 \\times 27 = 56.52\\) cm³.',
      'Step 4: Total volume = \\(37.68 + 56.52 = 94.2\\) cm³.'
    ],
    hint: 'Total volume is the sum of the volumes of the cone and the hemisphere.'
  },

  // ──────────────────────────────────────────────────────────
  //  TOPIC 11 — STATISTICS
  // ──────────────────────────────────────────────────────────

  {
    id: 62,
    topicId: 'statistics',
    difficulty: 'easy',
    type: 'mcq',
    question: 'If the mode of a distribution is 8 and mean is 2, then its median is:',
    options: ['2', '3', '4', '6'],
    answer: 2,
    solution: [
      'Step 1: Use the empirical relationship: \\(3\\text{ Median} = \\text{Mode} + 2\\text{ Mean}\\).',
      'Step 2: Substitute values: \\(3\\text{ Median} = 8 + 2(2) = 12\\).',
      'Step 3: Median = 4.'
    ],
    hint: 'Use the formula: 3 Median = Mode + 2 Mean.'
  },
  {
    id: 63,
    topicId: 'statistics',
    difficulty: 'medium',
    type: 'numerical',
    question: 'Find the mean of the first 5 prime numbers.',
    answer: '5.6',
    solution: [
      'Step 1: The first 5 prime numbers are 2, 3, 5, 7, and 11.',
      'Step 2: Sum of prime numbers = \\(2 + 3 + 5 + 7 + 11 = 28\\).',
      'Step 3: Mean = \\(\\frac{28}{5} = 5.6\\).'
    ],
    hint: 'List the first 5 primes (2 is the first), add them, and divide by 5.'
  },
  {
    id: 64,
    topicId: 'statistics',
    difficulty: 'hard',
    type: 'mcq',
    question: 'Find the modal class of the following distribution:\n\n| Class | 0–10 | 10–20 | 20–30 | 30–40 |\n|---|---|---|---|---|\n| Frequency | 5 | 12 | 20 | 15 |',
    options: ['0–10', '10–20', '20–30', '30–40'],
    answer: 2,
    solution: [
      'Step 1: Identify the class with the maximum frequency.',
      'Step 2: The maximum frequency is 20, which corresponds to the class interval 20–30.',
      'Step 3: The modal class is 20–30.'
    ],
    hint: 'The modal class is the class interval with the highest frequency.'
  },

  // ──────────────────────────────────────────────────────────
  //  TOPIC 12 — PROBABILITY
  // ──────────────────────────────────────────────────────────

  {
    id: 65,
    topicId: 'probability',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A card is drawn from a well-shuffled deck of 52 cards. The probability of getting a black king is:',
    options: ['\\(\\frac{1}{13}\\)', '\\(\\frac{1}{26}\\)', '\\(\\frac{2}{13}\\)', '\\(\\frac{3}{26}\\)'],
    answer: 1,
    solution: [
      'Step 1: Total number of cards = 52.',
      'Step 2: Number of black kings = 2 (King of Spades and King of Clubs).',
      'Step 3: Probability = \\(\\frac{2}{52} = \\frac{1}{26}\\).'
    ],
    hint: 'How many black kings are there in a standard deck of cards?'
  },
  {
    id: 66,
    topicId: 'probability',
    difficulty: 'medium',
    type: 'numerical',
    question: 'If the probability of an event happening is 0.05, what is the probability of it not happening?',
    answer: '0.95',
    solution: [
      'Step 1: P(not E) = \\(1 - P(E)\\).',
      'Step 2: Given P(E) = 0.05.',
      'Step 3: P(not E) = \\(1 - 0.05 = 0.95\\).'
    ],
    hint: 'The sum of probabilities of an event happening and not happening is 1.'
  },
  {
    id: 67,
    topicId: 'probability',
    difficulty: 'hard',
    type: 'mcq',
    question: 'Two dice are rolled simultaneously. The probability that the sum of the numbers on the two dice is a prime number is:',
    options: ['\\(\\frac{5}{12}\\)', '\\(\\frac{7}{12}\\)', '\\(\\frac{1}{3}\\)', '\\(\\frac{1}{2}\\)'],
    answer: 0,
    solution: [
      'Step 1: Total outcomes when two dice are rolled = 36.',
      'Step 2: Sums that are prime: 2, 3, 5, 7, 11.',
      'Step 3: Count outcomes for each sum:\n- Sum 2: (1,1) [1 outcome]\n- Sum 3: (1,2), (2,1) [2 outcomes]\n- Sum 5: (1,4), (2,3), (3,2), (4,1) [4 outcomes]\n- Sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) [6 outcomes]\n- Sum 11: (5,6), (6,5) [2 outcomes]',
      'Step 4: Total favourable outcomes = \\(1 + 2 + 4 + 6 + 2 = 15\\).',
      'Step 5: Probability = \\(\\frac{15}{36} = \\frac{5}{12}\\).'
    ],
    hint: 'List all outcomes where the sum of the numbers is 2, 3, 5, 7, or 11, then divide by 36.'
  }
];
