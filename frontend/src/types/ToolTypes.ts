export interface I18nString {
  [locale: string]: string
}

// Domain is a high level category of categories
export interface ToolDomain {
  uid: string
  name: I18nString
  description: I18nString
  level: number
}

// Category is a high level category of tools
export interface ToolCategory {
  uid: string
  name: I18nString
  description: I18nString
  domainId: string
}

// A company that builds tools
export interface ToolCompany {
  uid: string
  name: I18nString
  description: I18nString
  website_url: string
}

export interface Tool {
  uid: string
  name: I18nString
  description: I18nString
  companyId: string
  categoryId: string
  domainId: string
  website_url: string
}
