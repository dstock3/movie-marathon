import ToggleSidebar from '../modals/ToggleSidebar'
import Compose from '../modals/Compose'
import { ModalControllerProps } from '../../Types.types'

const ModalController = (props: ModalControllerProps) => {
  switch (true) {
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