export default class ApiClient {
  private readonly baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async get(endpoint: string, params?: Record<string, string>): Promise<any> {
    let url = `${this.baseUrl}${endpoint}`

    if (params) {
      const queryParams = new URLSearchParams(params).toString()
      url = `${url}?${queryParams}`
    }

    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`GET request failed with status ${response.status}`)
    }

    return response.json()
  }
}