import path from 'path'
import ApiClient from '../../utils/apiClient'
import { Organization, OrganizationListResponse } from './types'
import { extractValuesFromJson } from '../../utils/jsonValueExtractor'

import appConfig from '../../config/appConfig'

const api = new ApiClient(appConfig.govdata.baseUrl)

export async function getAllOrganizationsWithDatasetCount() {
  const response: OrganizationListResponse = await api.get(
    '/organization_list',
    { all_fields: 'true', include_dataset_count: 'true' }
  )
  const organizations = extractValuesFromJson(path.join(__dirname, './departments.json'))
  const listedOrganizationsWithDatasetCount: Organization[] = []

  for (const organization of organizations) {
    const listedOrganization =
      response.result.find((listedOrganization) => listedOrganization.display_name === organization)
    if (listedOrganization) {
      listedOrganizationsWithDatasetCount.push({
        display_name: listedOrganization.display_name,
        package_count: listedOrganization.package_count,
      })
    }
  }
  return listedOrganizationsWithDatasetCount
}
