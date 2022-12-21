import { Dispatch, SetStateAction } from 'react'

type Movie = {
    Title: string,
    Year: string,
    imdbID: string,
    Poster: string
}

export type Film = {
    Title: string,
    Year: string,
    imdbID: string,
    Poster: string,
    Date: string,
    Notes?: string | null
}

export type ThisStack = {
    name: string,
    desc: string,
    lineup: Array<Film>
}

export type PostType = {
    date: string
    content: string,
    likes: number
}

export type ThisUser = {
    handle: string,
    login: string,
    theme: string,
    movies: Array<Movie>,
    posts: Array<PostType>,
    stacks?: Array<ThisStack> | undefined
}

export type HeaderProps = {
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser,
    setResponseData: Dispatch<SetStateAction<ResponseDataType | null>>,
    isMenuOpen: boolean,
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>,
}

export type FooterProps = {
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser
}

export type ResponseDataType = {
    Response: boolean,
    Search: Array<object>,
    totalResults: string
}

export type DateViewEnabledType = {
  isOpen: boolean, 
  id: number | null,
  date?: string | null,
  movie?: Movie | null
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
    thisUser?: ThisUser,
    isExpanded: boolean,
    setIsExpanded: Dispatch<SetStateAction<boolean>>,
    setResponseData: Dispatch<SetStateAction<ResponseDataType | null>>
    page: string,
    setPage: Dispatch<SetStateAction<string>>,
    setTimeToPost: Dispatch<SetStateAction<boolean>>
}

export type ToolBarProps = {
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser,
    setTimeToPost: Dispatch<SetStateAction<boolean>>
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
    thisUser?: ThisUser,
    responseData: {
        Response: boolean,
        Search: Array<object>,
        totalResults: string,
    } | null,
    dateViewEnabled: DateViewEnabledType,
    setDateViewEnabled: Dispatch<SetStateAction<DateViewEnabledType>>,
    currentYear: string,
    setRangeOfDates: Dispatch<SetStateAction<Array<Date> | null>>,
    currentMonth: string,
    setMonthRange: Dispatch<SetStateAction<MonthRangeType>>,
    setCurrentMonth: Dispatch<SetStateAction<string>>,
    months: Array<string>,
    setCurrentYear: Dispatch<SetStateAction<string>>,
    monthRange: MonthRangeType,
    changeMonth: (directive: string) => void
}

export type ControllerProps = {
    changeMonth: (directive: string) => void,
    currentMonth: string,
    currentYear: string,
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser
}

export type GridProps = {
    monthRange?: Array<{
        date: string,
        day: string
      }> | null,
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser,
    setDateViewEnabled: Dispatch<SetStateAction<DateViewEnabledType>>
}

export type ThemeContextProviderProps = {
    children: React.ReactNode
}

export type FavProps = {
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser
}

export type DateViewType = {
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser,
    dateViewEnabled: DateViewEnabledType,
    setDateViewEnabled: Dispatch<SetStateAction<DateViewEnabledType>>,
    monthRange: MonthRangeType,
    changeMonth: (directive: string) => void,
}

export type SearchProps = {
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser,
    setResponseData: Dispatch<SetStateAction<ResponseDataType | null>>
}

export type WeekGlanceProps = {
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser,
    currentDate: Date,
    monthRange: MonthRangeType,
    setDateViewEnabled: Dispatch<SetStateAction<DateViewEnabledType>>,
    setMonthRange: Dispatch<SetStateAction<MonthRangeType>>
}

export type Stacks = {
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser
}

export type StackContainerProps = {
    stack: ThisStack,
    index: number,
    thisTheme: React.CSSProperties,
    thisUser?: ThisUser
}

export type FilmContainerProps = {
    film: Film,
    index: number
}

export type ComposeProps = {
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser | null,
    setTimeToPost: Dispatch<SetStateAction<boolean>>
}

export type SuggestionsProps = {
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser
}

export type FriendsProps = {
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser
}

export type LoadingProps = {
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser,
    isMini: boolean
}

export type ModalControllerProps = {
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser | null,
    isExpanded: boolean,
    timeToPost: boolean,
    setIsExpanded: Dispatch<SetStateAction<boolean>>,
    setTimeToPost: Dispatch<SetStateAction<boolean>>,
    isMenuOpen: boolean
}

export type MenuProps = {
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser | null,
}

export type PostContainerProps = {
    post: Post,
    postStyle: React.CSSProperties,
    clickHandler: (post: Post, pathId: string) => void,
    fillColor: string,
    pathId: number
}