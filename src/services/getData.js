import faker from 'faker';

export default class GetData {
  data = new Array(1000)
                  .fill(null)
                  .map((e, idx) => {
                    const date = new Date() - Math.ceil(Math.random() * 3100000000);
                    return {
                      id: idx + 1,
                      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                      country: faker.address.country(),
                      job: faker.name.jobType(),
                      lastSalary: parseInt(faker.finance.amount(), 10),
                      dateOfApplication: date,
                      isHaveExpirience: faker.random.boolean(),
                    }
                  });

  dataService = () => {
    return this.data;
  }
}
