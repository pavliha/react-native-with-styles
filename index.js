/* eslint-disable react/prop-types */
import React from 'react'
import mergeWith from 'lodash.mergewith'
import hoistStatics from 'hoist-non-react-statics'

const withStyles = (stylesFn) => Component => {
  const C = props => {
    const styles = typeof stylesFn === 'function' ? stylesFn(props) : stylesFn
    const { styles: overrides, ...restProps } = props
    const style = mergeWith({}, styles, overrides, (org, src) => ({ ...org, ...src }))
    return <Component styles={style} {...restProps} />
  }
  return hoistStatics(C, Component)
}

export default withStyles
