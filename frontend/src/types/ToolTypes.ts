// Domain is a high level category of categories
export interface ToolDomain {
  uid: string
  name: string
  description: string
  level: number
}

// Category is a high level category of tools
export interface ToolCategory {
  uid: string
  name: string
  description: string
  domainId: string
}

// A company that builds tools
export interface ToolCompany {
  uid: string
  name: string
  description: string
  website_url: string
}

export interface Tool {
  uid: string
  name: string
  description: string
  companyId: string
  categoryId: string
  domainId: string
  website_url: string
}
