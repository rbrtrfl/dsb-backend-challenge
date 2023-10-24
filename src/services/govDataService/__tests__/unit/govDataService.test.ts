import { getAllOrganizationsWithDatasetCount } from '../..'
import ApiClient from '../../../../utils/apiClient'
import { extractValuesFromJson } from '../../../../utils/jsonValueExtractor'

jest.mock('../../../../utils/apiClient')
jest.mock('../../../../utils/jsonValueExtractor')

describe('getAllOrganizationsWithDatasetCount', () => {
  it('should return organizations with dataset count', async () => {
    // Given
    const mockApiResponse = {
      result: [
        { display_name: 'Org A', package_count: 5 },
        { display_name: 'Org B', package_count: 10 },
        { display_name: 'Org C', package_count: 20 },
        { display_name: 'Org D', package_count: 30 },
      ],
    };
    (ApiClient.prototype.get as jest.Mock).mockResolvedValue(mockApiResponse);
    (extractValuesFromJson as jest.Mock).mockReturnValue(['Org A', 'Org B'])

    // When
    const result = await getAllOrganizationsWithDatasetCount()

    // Then
    expect(result).toEqual([
      { display_name: 'Org A', package_count: 5 },
      { display_name: 'Org B', package_count: 10 },
    ])
  })
})
