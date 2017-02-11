import React from 'react'

export default class Svg extends React.Component {
  render () {
    // Append on any classes passed down
    const klass = `svg ${this.props.className || ''}`.trim()

    // See if this is one of those special use-cases needing CSS wizardry
    const pixie = dust[this.props.src]
    if (pixie) {
      return pixie()
    }

    // When there is nothing special do the status quo
    return (
      <img src={this.props.src} alt={this.props.alt || 'Scalable vector graphic'} className={klass} />
    )
  }
}

const dust = {
  'img/info.svg': () => {
    return (
      <svg viewBox="0 0 32.4 32.4">
        <circle className="eapp-help-circle" cx="16.2" cy="16.2" r="16.2"/>
        <g>
          <path className="eapp-help-icon" d="M16.2,25.9c-5.4,0-9.7-4.4-9.7-9.7c0-5.4,4.4-9.7,9.7-9.7s9.7,4.4,9.7,9.7S21.6,25.9,16.2,25.9z M16.5,9.7
                                              c-2.1,0-3.6,0.9-4.7,2.7c-0.1,0.2-0.1,0.4,0.1,0.5l1.7,1.3c0.1,0.1,0.2,0.1,0.2,0.1c0.1,0,0.2-0.1,0.3-0.2c0.6-0.8,0.8-1,1.1-1.2
                                              c0.2-0.2,0.6-0.3,1.1-0.3c0.8,0,1.6,0.5,1.6,1.1c0,0.7-0.3,1-1.1,1.3c-0.9,0.4-2.1,1.5-2.1,2.7v0.5c0,0.2,0.2,0.4,0.4,0.4h2.4
                                              c0.2,0,0.4-0.2,0.4-0.4c0-0.3,0.4-0.9,1-1.3c1-0.5,2.3-1.3,2.3-3.2C21.1,11.4,18.7,9.7,16.5,9.7z M17.8,19.8c0-0.2-0.2-0.4-0.4-0.4
                                              H15c-0.2,0-0.4,0.2-0.4,0.4v2.4c0,0.2,0.2,0.4,0.4,0.4h2.4c0.2,0,0.4-0.2,0.4-0.4V19.8z"/>
        </g>
      </svg>
    )
  },
  'img/bald.svg': () => {
    return (
      <svg viewBox="0 0 30.9 36.8">
        <path d="M0,18.8C0,10.3,6.9,3.4,15.4,3.4s15.4,6.9,15.4,15.4H0z"/>
      </svg>
    )
  },
  'img/hair.svg': () => {
    return (
      <svg viewBox="0 0 18 32" enableBackground="new 0 0 18 32">
        <path d="M9,26.37c0,1.41,0.7,3.28,1.35,4.5l-0.08-0.02l0.02,0.02C4.74,28.32,0,24.8,0,18.01c0-7.7,9-8.38,9-13.5
                 C9,3.1,8.3,1.23,7.68,0l0.06,0.02L7.72,0c5.55,2.55,10.29,6.07,10.29,12.86C18.01,20.56,9,21.24,9,26.37z"/>
      </svg>
    )
  },
  'img/question.svg': () => {
    return (
      <svg viewBox="0 0 30.86 36.84">
        <path d="M15.43,34.25C6.91,34.25,0,27.34,0,18.82C0,10.3,6.91,3.39,15.43,3.39s15.43,6.91,15.43,15.43
                 C30.87,27.34,23.95,34.25,15.43,34.25z M15.84,8.53c-3.28,0-5.73,1.41-7.46,4.28c-0.18,0.28-0.1,0.64,0.16,0.84l2.65,2.01
                 c0.1,0.08,0.24,0.12,0.38,0.12c0.18,0,0.38-0.08,0.5-0.24c0.94-1.21,1.35-1.57,1.73-1.85c0.34-0.24,1-0.48,1.73-0.48
                 c1.29,0,2.47,0.82,2.47,1.71c0,1.04-0.54,1.57-1.77,2.13c-1.43,0.64-3.38,2.31-3.38,4.26v0.72c0,0.36,0.28,0.64,0.64,0.64h3.86
                 c0.36,0,0.64-0.28,0.64-0.64c0-0.46,0.58-1.45,1.53-1.99c1.53-0.87,3.62-2.03,3.62-5.08C23.15,11.28,19.29,8.53,15.84,8.53z
                 M18.01,24.61c0-0.36-0.28-0.64-0.64-0.64H13.5c-0.36,0-0.64,0.28-0.64,0.64v3.86c0,0.36,0.28,0.64,0.64,0.64h3.86
                 c0.36,0,0.64-0.28,0.64-0.64V24.61z"/>
      </svg>
    )
  },
  'img/eye.svg': () => {
    return (
      <svg viewBox="0 0 36 36.84" enableBackground="new 0 0 36 36.84">
        <path d="M35.61,21.49c-3.7,6.09-10.47,10.19-17.6,10.19S4.1,27.56,0.4,21.49C0.16,21.07,0,20.61,0,20.11
                 c0-0.5,0.16-0.96,0.4-1.39c3.7-6.07,10.47-10.19,17.6-10.19s13.91,4.12,17.6,10.19c0.24,0.42,0.4,0.88,0.4,1.39
                 C36.01,20.61,35.85,21.07,35.61,21.49z M25.78,13.01c0.8,1.37,1.23,2.93,1.23,4.52c0,4.96-4.04,9-9,9s-9-4.04-9-9
                 c0-1.59,0.42-3.16,1.23-4.52c-3.13,1.61-5.75,4.14-7.66,7.09c3.44,5.3,8.98,9,15.43,9s12-3.7,15.43-9
                 C31.53,17.15,28.92,14.62,25.78,13.01z M18.01,11.42c-3.36,0-6.11,2.75-6.11,6.11c0,0.52,0.44,0.96,0.96,0.96s0.96-0.44,0.96-0.96
                 c0-2.29,1.89-4.18,4.18-4.18c0.52,0,0.96-0.44,0.96-0.96C18.97,11.87,18.53,11.42,18.01,11.42z"/>
      </svg>
    )
  },
  'img/female.svg': () => {
    return (
      <svg viewBox="0 0 50.81 79.19">
        <path d="M50.81,25.4C50.81,11.37,39.43,0,25.4,0S0,11.37,0,25.4c0,12.32,8.77,22.59,20.4,24.91v9.09h-9.79v10h9.79v9.79
                 h10V69.4h9.79v-10H30.4v-9.09C42.04,47.99,50.81,37.72,50.81,25.4z M10,25.4C10,16.91,16.91,10,25.4,10s15.4,6.91,15.4,15.4
                 s-6.91,15.4-15.4,15.4S10,33.9,10,25.4z"/>
      </svg>
    )
  },
  'img/male.svg': () => {
    return (
      <svg viewBox="-10 -10 80 80">
        <path d="M62.77,0.12V0H37.69v10h8.64l-6.4,6.4c-4.35-3.04-9.43-4.56-14.52-4.56c-6.5,0-13,2.48-17.96,7.44
                 c-9.92,9.92-9.92,26.01,0,35.93c4.96,4.96,11.46,7.44,17.96,7.44c6.5,0,13-2.48,17.96-7.44c8.58-8.58,9.73-21.76,3.48-31.58
                 l6.05-6.05v7.64h10V0.12H62.77z M36.3,48.14c-2.91,2.91-6.78,4.51-10.89,4.51c-4.11,0-7.98-1.6-10.89-4.51
                 C11.6,45.23,10,41.36,10,37.24c0-4.11,1.6-7.98,4.51-10.89s6.78-4.51,10.89-4.51c4.11,0,7.98,1.6,10.89,4.51s4.51,6.78,4.51,10.89
                 C40.81,41.36,39.21,45.23,36.3,48.14z"/>
      </svg>
    )
  },
  'img/neighbor-icon.svg': () => {
    return (
      <svg viewBox="0 0 74.94 28.35">
        <path d="M30.54,9.79V0.78c0-0.4-0.31-0.71-0.71-0.71h-4.24c-0.4,0-0.71,0.31-0.71,0.71v4.31l-5.39-4.51
                 c-0.93-0.77-2.43-0.77-3.36,0L0.25,13.82c-0.29,0.24-0.33,0.71-0.09,0.99l1.37,1.64c0.11,0.13,0.29,0.22,0.46,0.24
                 c0.2,0.02,0.38-0.05,0.53-0.16L17.81,3.78L33.1,16.53c0.13,0.11,0.29,0.16,0.46,0.16c0.02,0,0.04,0,0.07,0
                 c0.18-0.02,0.35-0.11,0.46-0.24l1.37-1.64c0.24-0.29,0.2-0.75-0.09-0.99L30.54,9.79z"/>
        <path d="M17.81,5.73L5.11,16.2c0,0.05-0.02,0.09-0.02,0.13v10.61c0,0.77,0.64,1.41,1.41,1.41h8.49v-8.49h5.66v8.49
                 h8.49c0.77,0,1.41-0.64,1.41-1.41V16.33c0-0.04,0-0.09-0.02-0.13L17.81,5.73z"/>
        <path d="M57.12,5.73L44.42,16.2c0,0.05-0.02,0.09-0.02,0.13v10.61c0,0.77,0.64,1.41,1.41,1.41h8.49v-8.49h5.66v8.49
                 h8.49c0.77,0,1.41-0.64,1.41-1.41V16.33c0-0.04,0-0.09-0.02-0.13L57.12,5.73z"/>
        <path d="M74.69,13.82l-4.84-4.02V0.78c0-0.4-0.31-0.71-0.71-0.71H64.9c-0.4,0-0.71,0.31-0.71,0.71v4.31L58.8,0.58
                 c-0.93-0.77-2.43-0.77-3.36,0L39.56,13.82c-0.29,0.24-0.33,0.71-0.09,0.99l1.37,1.64c0.11,0.13,0.29,0.22,0.46,0.24
                 c0.2,0.02,0.38-0.05,0.53-0.16L57.12,3.78l15.29,12.75c0.13,0.11,0.29,0.16,0.46,0.16c0.02,0,0.04,0,0.07,0
                 c0.18-0.02,0.35-0.11,0.46-0.24l1.37-1.64C75.02,14.52,74.98,14.06,74.69,13.82z"/>
      </svg>
    )
  },
  'img/friend-icon.svg': () => {
    return (
      <svg viewBox="0 0 44.33 34.84">
        <path d="M17.42,25.33c-1.51,0-2.97-0.15-4.35-0.4c-2.05,1.46-4.38,2.52-6.88,3.17c-0.67,0.17-1.39,0.3-2.13,0.4
                 c-0.03,0-0.05,0-0.07,0c-0.37,0-0.72-0.3-0.79-0.72c-0.1-0.47,0.22-0.77,0.49-1.09c0.97-1.09,2.05-2.05,2.89-4.11
                 C2.57,20.26,0,16.67,0,12.67C0,5.67,7.79,0,17.42,0s17.42,5.67,17.42,12.67C34.83,19.67,27.04,25.33,17.42,25.33z M37.75,28.92
                 c0.84,2.05,1.93,3.02,2.89,4.11c0.27,0.32,0.59,0.62,0.49,1.09c-0.1,0.45-0.47,0.77-0.87,0.72c-0.74-0.1-1.46-0.22-2.13-0.4
                 c-2.5-0.64-4.82-1.71-6.88-3.17c-1.39,0.25-2.85,0.4-4.35,0.4c-4.48,0-8.59-1.24-11.68-3.27c0.72,0.05,1.46,0.1,2.18,0.1
                 c5.32,0,10.34-1.53,14.18-4.3C35.72,21.18,38,17.1,38,12.67c0-1.29-0.2-2.55-0.57-3.76c4.18,2.3,6.9,5.96,6.9,10.09
                 C44.33,23.03,41.76,26.6,37.75,28.92z"/>
      </svg>
    )
  },
  'img/landlord-icon.svg': () => {
    return (
      <svg viewBox="0 0 29.56 37.62">
        <path d="M29.56,1.34v34.94c0,0.73-0.61,1.34-1.34,1.34H1.34C0.61,37.62,0,37.01,0,36.28V1.34C0,0.61,0.61,0,1.34,0
                 h26.87C28.95,0,29.56,0.61,29.56,1.34z M8.06,6.05c0-0.38-0.29-0.67-0.67-0.67H6.05c-0.38,0-0.67,0.29-0.67,0.67v1.34
                 c0,0.38,0.29,0.67,0.67,0.67h1.34c0.38,0,0.67-0.29,0.67-0.67V6.05z M8.06,11.42c0-0.38-0.29-0.67-0.67-0.67H6.05
                 c-0.38,0-0.67,0.29-0.67,0.67v1.34c0,0.38,0.29,0.67,0.67,0.67h1.34c0.38,0,0.67-0.29,0.67-0.67V11.42z M8.06,16.8
                 c0-0.38-0.29-0.67-0.67-0.67H6.05c-0.38,0-0.67,0.29-0.67,0.67v1.34c0,0.38,0.29,0.67,0.67,0.67h1.34c0.38,0,0.67-0.29,0.67-0.67
                 V16.8z M8.06,22.17c0-0.38-0.29-0.67-0.67-0.67H6.05c-0.38,0-0.67,0.29-0.67,0.67v1.34c0,0.38,0.29,0.67,0.67,0.67h1.34
                 c0.38,0,0.67-0.29,0.67-0.67V22.17z M8.06,27.55c0-0.38-0.29-0.67-0.67-0.67H6.05c-0.38,0-0.67,0.29-0.67,0.67v1.34
                 c0,0.38,0.29,0.67,0.67,0.67h1.34c0.38,0,0.67-0.29,0.67-0.67V27.55z M10.75,7.39c0,0.38,0.29,0.67,0.67,0.67h1.34
                 c0.38,0,0.67-0.29,0.67-0.67V6.05c0-0.38-0.29-0.67-0.67-0.67h-1.34c-0.38,0-0.67,0.29-0.67,0.67V7.39z M10.75,12.77
                 c0,0.38,0.29,0.67,0.67,0.67h1.34c0.38,0,0.67-0.29,0.67-0.67v-1.34c0-0.38-0.29-0.67-0.67-0.67h-1.34c-0.38,0-0.67,0.29-0.67,0.67
                 V12.77z M10.75,18.14c0,0.38,0.29,0.67,0.67,0.67h1.34c0.38,0,0.67-0.29,0.67-0.67V16.8c0-0.38-0.29-0.67-0.67-0.67h-1.34
                 c-0.38,0-0.67,0.29-0.67,0.67V18.14z M10.75,23.51c0,0.38,0.29,0.67,0.67,0.67h1.34c0.38,0,0.67-0.29,0.67-0.67v-1.34
                 c0-0.38-0.29-0.67-0.67-0.67h-1.34c-0.38,0-0.67,0.29-0.67,0.67V23.51z M18.81,30.23c0-0.38-0.29-0.67-0.67-0.67h-6.72
                 c-0.38,0-0.67,0.29-0.67,0.67v4.03c0,0.38,0.29,0.67,0.67,0.67h6.72c0.38,0,0.67-0.29,0.67-0.67V30.23z M18.81,6.05
                 c0-0.38-0.29-0.67-0.67-0.67H16.8c-0.38,0-0.67,0.29-0.67,0.67v1.34c0,0.38,0.29,0.67,0.67,0.67h1.34c0.38,0,0.67-0.29,0.67-0.67
                 V6.05z M18.81,11.42c0-0.38-0.29-0.67-0.67-0.67H16.8c-0.38,0-0.67,0.29-0.67,0.67v1.34c0,0.38,0.29,0.67,0.67,0.67h1.34
                 c0.38,0,0.67-0.29,0.67-0.67V11.42z M18.81,16.8c0-0.38-0.29-0.67-0.67-0.67H16.8c-0.38,0-0.67,0.29-0.67,0.67v1.34
                 c0,0.38,0.29,0.67,0.67,0.67h1.34c0.38,0,0.67-0.29,0.67-0.67V16.8z M18.81,22.17c0-0.38-0.29-0.67-0.67-0.67H16.8
                 c-0.38,0-0.67,0.29-0.67,0.67v1.34c0,0.38,0.29,0.67,0.67,0.67h1.34c0.38,0,0.67-0.29,0.67-0.67V22.17z M24.19,6.05
                 c0-0.38-0.29-0.67-0.67-0.67h-1.34c-0.38,0-0.67,0.29-0.67,0.67v1.34c0,0.38,0.29,0.67,0.67,0.67h1.34c0.38,0,0.67-0.29,0.67-0.67
                 V6.05z M24.19,11.42c0-0.38-0.29-0.67-0.67-0.67h-1.34c-0.38,0-0.67,0.29-0.67,0.67v1.34c0,0.38,0.29,0.67,0.67,0.67h1.34
                 c0.38,0,0.67-0.29,0.67-0.67V11.42z M24.19,16.8c0-0.38-0.29-0.67-0.67-0.67h-1.34c-0.38,0-0.67,0.29-0.67,0.67v1.34
                 c0,0.38,0.29,0.67,0.67,0.67h1.34c0.38,0,0.67-0.29,0.67-0.67V16.8z M24.19,22.17c0-0.38-0.29-0.67-0.67-0.67h-1.34
                 c-0.38,0-0.67,0.29-0.67,0.67v1.34c0,0.38,0.29,0.67,0.67,0.67h1.34c0.38,0,0.67-0.29,0.67-0.67V22.17z M24.19,27.55
                 c0-0.38-0.29-0.67-0.67-0.67h-1.34c-0.38,0-0.67,0.29-0.67,0.67v1.34c0,0.38,0.29,0.67,0.67,0.67h1.34c0.38,0,0.67-0.29,0.67-0.67
                 V27.55z"/>
      </svg>
    )
  },
  'img/business-associate-icon.svg': () => {
    return (
      <svg viewBox="0 0 40.05 34.33">
        <path d="M40.05,17.88H0V9.3c0-1.97,1.61-3.58,3.58-3.58h7.87V2.15C11.44,0.96,12.4,0,13.59,0h12.87
                 c1.18,0,2.15,0.96,2.15,2.15v3.58h7.87c1.97,0,3.58,1.61,3.58,3.58V17.88z M40.05,30.75c0,1.97-1.61,3.58-3.58,3.58H3.58
                 C1.61,34.33,0,32.72,0,30.75V20.03h15.02v3.58c0,0.78,0.65,1.43,1.43,1.43h7.15c0.78,0,1.43-0.65,1.43-1.43v-3.58h15.02V30.75z
                 M25.75,5.72V2.86H14.3v2.86H25.75z M22.89,22.89h-5.72v-2.86h5.72V22.89z"/>
      </svg>
    )
  },
  'img/other-icon.svg': () => {
    return (
      <svg viewBox="0 0 36.62 36.62">
        <path d="M18.31,36.62C8.2,36.62,0,28.42,0,18.31C0,8.2,8.2,0,18.31,0s18.31,8.2,18.31,18.31
                 C36.62,28.42,28.42,36.62,18.31,36.62z M18.79,6.1c-3.89,0-6.79,1.67-8.84,5.08c-0.21,0.33-0.12,0.76,0.19,1l3.15,2.38
                 c0.12,0.09,0.29,0.14,0.45,0.14c0.21,0,0.45-0.09,0.6-0.29c1.12-1.43,1.6-1.86,2.05-2.19c0.41-0.29,1.19-0.57,2.05-0.57
                 c1.53,0,2.93,0.98,2.93,2.03c0,1.24-0.64,1.86-2.1,2.53c-1.69,0.76-4,2.74-4,5.05v0.86c0,0.43,0.33,0.76,0.76,0.76h4.58
                 c0.43,0,0.76-0.33,0.76-0.76c0-0.55,0.69-1.72,1.81-2.36c1.81-1.03,4.29-2.41,4.29-6.03C27.46,9.37,22.89,6.1,18.79,6.1z
                 M21.36,25.17c0-0.43-0.33-0.76-0.76-0.76h-4.58c-0.43,0-0.76,0.33-0.76,0.76v4.58c0,0.43,0.33,0.76,0.76,0.76h4.58
                 c0.43,0,0.76-0.33,0.76-0.76V25.17z"/>
      </svg>
    )
  }
}