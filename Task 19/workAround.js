import { salary, getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility } from './employee';

function getEmployeeInformation(salary) {
  console.log('Cadre: ' + getCadre(salary));
  console.log('Tax: ' + calculateTax(salary));
  console.log('Benefits: ' + getBenefits(salary));
  console.log('Bonus: ' + calculateBonus(salary));
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility(salary) + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
