import React from 'react'
import ToggleSidebar from '../modals/ToggleSidebar'
import Compose from '../modals/Compose'
import { ModalControllerProps } from '../../Types.types'
import Menu from '../modals/Menu';

const ModalController = (props: ModalControllerProps) => {
  switch (true) {
    case props.isMenuOpen && !props.isExpanded:
      return (
        <React.Fragment>
          <Menu thisStyle={props.thisStyle} thisUser={props.thisUser} setPage={props.setPage} setIsMenuOpen={props.setIsMenuOpen} />
          <ToggleSidebar thisStyle={props.thisStyle} thisUser={props.thisUser} isExpanded={props.isExpanded} setIsExpanded={props.setIsExpanded} />
        </React.Fragment>
      );
    case props.isMenuOpen && props.isExpanded:
      return (
        <Menu thisStyle={props.thisStyle} thisUser={props.thisUser} setPage={props.setPage} setIsMenuOpen={props.setIsMenuOpen} />
      );
    case !props.isExpanded:
      return (
        <ToggleSidebar thisStyle={props.thisStyle} thisUser={props.thisUser} isExpanded={props.isExpanded} setIsExpanded={props.setIsExpanded} />
      );
    case props.timeToPost:
      return (
        <Compose thisStyle={props.thisStyle} thisUser={props.thisUser} setTimeToPost={props.setTimeToPost} />
      );

    default:
      return null;
  }
}
export default ModalController