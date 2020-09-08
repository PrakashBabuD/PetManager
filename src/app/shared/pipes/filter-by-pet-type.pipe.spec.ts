import { FilterByPetTypePipe } from './filter-by-pet-type.pipe';

describe('FilterByPetTypePipe', () => {
  const UNFILTERED_DATA=[
    {
      "name": "Tom",
      "type": "Cat"
    },
    {
      "name": "Sam",
      "type": "Dog"
    },
    {
      "name": "Nemo",
      "type": "Fish"
    }
  ];

  it('should filter pets which are Cat type', () => {
    const pipe = new FilterByPetTypePipe();

    let filteredData= pipe.transform(UNFILTERED_DATA, 'Cat');

    expect(filteredData[0].type).toBe("Cat");
  });
  it('should return empty list when  pet of give type is not found', () => {
    const pipe = new FilterByPetTypePipe();

    let filteredData:any= pipe.transform(UNFILTERED_DATA, 'Horse');

    expect(filteredData.length).toBe(0);
  });
});
