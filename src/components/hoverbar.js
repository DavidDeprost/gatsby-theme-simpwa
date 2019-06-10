import React from "react"
import { css } from "@emotion/core"
import { sidebar } from "../constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/// Represents the inactive, hoverable sidebar
function Hoverbar(props) {
  let width = props.whichSide === 'left' ? sidebar.left.width : sidebar.right.width;
  let icon = props.whichSide === 'left' ? sidebar.left.icon : sidebar.right.icon;
  let otherSide = props.whichSide === 'left' ? 'right' : 'left';

  let backgroundColor = props.whichSide === 'left' ?
        sidebar.left.color.background : sidebar.right.color.background;
  let backgroundHoverColor = props.whichSide === 'left' ?
        sidebar.left.color.backgroundHover : sidebar.right.color.backgroundHover;
  let iconColor = props.whichSide === 'left' ?
        sidebar.left.color.icon : sidebar.right.color.icon;
  let iconHoverColor = props.whichSide === 'left' ?
        sidebar.left.color.iconHover : sidebar.right.color.iconHover;
  let borderColor = props.whichSide === 'left' ?
        sidebar.left.color.border : sidebar.right.color.border;
  let borderHoverColor = props.whichSide === 'left' ?
        sidebar.left.color.borderHover : sidebar.right.color.borderHover;

  let shadow = props.whichSide === 'left' ? '6px 0 15px 0 #888' : '-6px 0 15px 0 #888';
  let hoverShadow = props.whichSide === 'left' ? '6px 0 15px 0 #333' : '-6px 0 15px 0 #333';

  let transitionDelay = props.whichSide === 'left' ?
          sidebar.left.transitionDuration : sidebar.right.transitionDuration;

  return (
    <div onClick={props.onClick}
          css={css`
            --bg: ${backgroundColor};
            --color: ${iconColor};
            --border: 2px solid ${borderColor};
            --shadow: ${shadow};
            &:hover {
              cursor: pointer;
              --bg: ${backgroundHoverColor};
              --color: ${iconHoverColor};
              --border: 2px solid ${borderHoverColor};
              --shadow: ${hoverShadow};
            }
    `}>
      {/* Square icon div: */}
      <div css={css`
            position: fixed;
            z-index: 10;
            top: 0;
            ${props.whichSide}: 0;
            height: 4rem;
            width: 4rem;
            text-align: center;
            background: var(--bg);
            border-bottom: var(--border);
            ${'border-' + otherSide}: var(--border);
      `}>
          <FontAwesomeIcon
            icon={icon}
            css={css`
              font-size: 1.75rem;
              margin: 1rem;
              color: var(--color);
          `}/>
      </div>

      {/* Small strip below icon to the side of the screen: */}
      <div css={css`
            position: absolute;
            z-index: 10;
            top: 4rem;
            ${props.whichSide}: 0;
            height: 100%;
            width: ${width}rem;
            background: var(--bg);
            ${'border-' + otherSide}: var(--border);
            opacity: ${props.isActive ? 0 : 1 };
            transition-property: opacity;
            transition-delay: ${props.isActive ? '0s' : transitionDelay };
            box-shadow: var(--shadow);
      `}/>

    </div>
  )
}

export default Hoverbar;