// @flow

import * as React from 'react'
import { Button as MUIButton, emphasize } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { default as cx } from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'
import { colors } from '../../configs'

const useStyles = makeStyles((theme) => ({
  buttonContrast: {
    backgroundColor: theme.palette?.contrast?.main,
    color: theme.palette?.contrast?.contrastText,
    '&:hover': {
      backgroundColor: `${theme.palette?.contrast?.hover} !important`,
    },
  },
  buttonPrimary: {
    '&:hover': {
      backgroundColor: `${theme.palette.primary?.hover} !important`,
    },
  },
  icon: {
    width: 'auto',
    height: '2rem',
  },
  buttonProgress: {
    color: colors?.expense,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -10,
    marginLeft: -8,
  },
  leftIcon: {
    marginRight: '1rem',
  },
}))

const useCustomButton = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1.3, 2),
    fontSize: theme.typography.htmlFontSize,
    lineHeight: 0,
    fontWeight: 500,
    textTransform: 'none',
    boxShadow: 'none',
  },
  contained: {
    backgroundColor: (props) =>
      props.color ? theme.palette[props.color].main : colors?.light,
    color: (props) =>
      props.color
        ? theme.palette[props.color].contrastText
        : theme.palette.text.primary,
    '&:hover': {
      backgroundColor: (props) =>
        props.color
          ? emphasize(theme.palette[props.color].main, 0.2)
          : emphasize(colors?.light, 0.2),
    },
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: 1,
    justifyContent: 'center',
  },
}))
export const Button = React.forwardRef(function Button(props, ref) {
  const {
    className,
    children,
    color,
    disabled,
    icon,
    onClick,
    loading = false,
    size = 'medium',
    text,
    variant = 'contained',
    vertical = false,
    ...other
  } = props
  const classes = useStyles()
  const customButton = useCustomButton({ color })
  const Icon = (pr) => (icon ? React.cloneElement(icon, { ...pr }) : null)
  const allowedColors = ['default', 'inherit', 'primary', 'secondary']
  return (
    <MUIButton
      ref={ref}
      className={className}
      classes={customButton}
      color={allowedColors.includes(color) ? color : 'default'}
      disabled={disabled || loading}
      onClick={onClick}
      size={size}
      variant={variant}
      elevation={0}
      {...other}
    >
      <Icon className={cx(classes.icon, vertical ? null : classes.leftIcon)} />
      {children ?? text}
      {loading ? (
        <CircularProgress className={classes.buttonProgress} size={20} />
      ) : (
        ''
      )}
    </MUIButton>
  )
})

export default Button
