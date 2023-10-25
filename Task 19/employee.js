export let salary = 100000;

export let payGrades = {
  entryLevel: { taxMultiplier: 0.05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: 0.1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: 0.2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

export function getCadre() {
  if (salary >= payGrades.entryLevel.minSalary && salary <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (salary >= payGrades.midLevel.minSalary && salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

export function calculateTax() {
  return payGrades[getCadre()].taxMultiplier * salary;
}

export function getBenefits() {
  return payGrades[getCadre()].benefits.join(', ');
}

export function calculateBonus() {
  return 0.02 * salary;
}

export function reimbursementEligibility() {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
  let totalBenefitsValue = 0;
  let employeeBenefits = payGrades[getCadre()].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
}
