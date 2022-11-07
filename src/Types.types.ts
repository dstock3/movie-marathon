import { Dispatch, SetStateAction } from 'react'

export type HeaderProps = {
    thisStyle: React.CSSProperties,
    thisUser?: {
        handle: string,
        login: string,
        theme: string,
        metadataIsAllowed: boolean,
        searchData: Array<string>
    },
    setResponseData: Dispatch<SetStateAction<ResponseDataType | null>>
}

export type FooterProps = {
    thisStyle: React.CSSProperties,
    thisUser?: {
      handle: string,
      login: string,
      theme: string,
    }
}

export type ResponseDataType = {
    Response: boolean,
    Search: Array<object>,
    totalResults: string
}

export type DateViewEnabledType = {
  "isOpen": boolean, 
  "id": number | null
}

export type MainProps = {
    users: Users, 
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser,
    responseData: {
      Response: boolean,
      Search: Array<object>,
      totalResults: string,
    } | null,
    dateViewEnabled: DateViewEnabledType,
    setDateViewEnabled: Dispatch<SetStateAction<DateViewEnabledType>>,
    page: string,
    setPage: Dispatch<SetStateAction<string>>
}

export type SidebarProps = {
    thisStyle: React.CSSProperties,
    thisUser?: {
      handle: string,
      login: string,
      theme: string,
      metadataIsAllowed: boolean,
      searchData: Array<string>,
    },
    isExpanded: boolean,
    setIsExpanded: Dispatch<SetStateAction<boolean>>,
    setResponseData: Dispatch<SetStateAction<ResponseDataType | null>>
    page: string,
    setPage: Dispatch<SetStateAction<string>>
}

export type ToolBarProps = {
    thisStyle: React.CSSProperties,
    thisUser?: {
      handle: string,
      login: string,
      theme: string,
      metadataIsAllowed: boolean,
      searchData: Array<string>,
    }
}


export type PostType = {
    date: string
    content: string
}
  
export type ThisUser = {
    handle: string,
    login: string,
    theme: string,
    movies: Array<Object>,
    posts: Array<PostType>
}
  
export type Users = {
    handle: string;
    login: string;
    theme: string;
    metadataIsAllowed: boolean;
    searchData: never[];
    posts: {
        date: string;
        content: string;
    }[];
    movies: {
        Title: string;
    }[];
}[]

export type MovieType = {
    [key: string]: any
    propname?: any
}

export type FeedProps = {
    users: Users,
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser
}
  
export type Post = {
    id: string,
    handle: string, 
    content: string, 
    date: string,
    likes: number
}

export type MonthRangeType = Array<{
    date: string,
    day: string
}> | null

export type CalendarProps = {
    thisStyle: React.CSSProperties,
    thisUser?: {
        handle: string,
        login: string,
        theme: string,
    },
    responseData: {
        Response: boolean,
        Search: Array<object>,
        totalResults: string,
    } | null,
    dateViewEnabled: DateViewEnabledType,
    setDateViewEnabled: Dispatch<SetStateAction<DateViewEnabledType>>
}

export type ControllerProps = {
    changeMonth: (directive: string) => void,
    currentMonth: string,
    currentYear: string,
    thisStyle: React.CSSProperties,
    thisUser?: {
      handle: string,
      login: string,
      theme: string,
    }
}

export type GridProps = {
    monthRange?: Array<{
        date: string,
        day: string
      }> | null,
    thisStyle: React.CSSProperties,
    thisUser?: {
        handle: string,
        login: string,
        theme: string,
      },
    setDateViewEnabled: Dispatch<SetStateAction<{"isOpen": boolean, "id": number | null}>>
}

export type ThemeContextProviderProps = {
    children: React.ReactNode
}

export type FavProps = {
    thisStyle: React.CSSProperties,
    thisUser?: {
        handle: string,
        login: string,
        theme: string,
        movies: Array<Object>
    }
}

export type DateViewType = {
    thisStyle: React.CSSProperties,
    thisUser?: {
      handle: string,
      login: string,
      theme: string,
    },
    dateViewEnabled: DateViewEnabledType,
    setDateViewEnabled: Dispatch<SetStateAction<DateViewEnabledType>>,
    monthRange: MonthRangeType,
    changeMonth: (directive: string) => void,
}

export type SearchProps = {
    thisStyle: React.CSSProperties,
    thisUser?: {
        handle: string,
        login: string,
        theme: string,
        metadataIsAllowed: boolean,
        searchData: Array<string>,
    },
    setResponseData: Dispatch<SetStateAction<ResponseDataType | null>>
}

export type WeekGlanceProps = {
    thisStyle: React.CSSProperties,
    thisUser?: {
        handle: string,
        login: string,
        theme: string,
        movies: Array<Object>
    }
}