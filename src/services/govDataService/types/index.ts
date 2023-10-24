export interface OrganizationListResponse {
  help: string,
  success: boolean,
  result: Organization[],
}

export interface Organization {
  approval_status?: string,
  created?: Date,
  description?: string,
  display_name: string,
  id?: string,
  image_display_url?: string,
  image_url?: string,
  is_organization?: boolean,
  name?: string,
  num_followers?: number,
  package_count: number,
  state?: string,
  title?: string,
  type?: string,
}
