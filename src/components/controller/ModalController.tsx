import React from 'react'
import ToggleSidebar from '../modals/ToggleSidebar'
import Compose from '../modals/Compose'
import { ModalControllerProps } from '../../Types.types'

const ModalController = (props: ModalControllerProps) => {
    if (!props.isExpanded)
        return (
            <ToggleSidebar thisStyle={props.thisStyle} thisUser={props.thisUser} isExpanded={props.isExpanded} setIsExpanded={props.setIsExpanded} />
        )
    else if (props.timeToPost)
        return (
            <Compose thisStyle={props.thisStyle} thisUser={props.thisUser} setTimeToPost={props.setTimeToPost} />
        )
    else
        return null
}

export default ModalController