import { makeStyles } from '@material-ui/core'
import { default as cx } from 'classnames'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: ({ flex }) => flex,
    flexWrap: ({ wrap }) => wrap,
    flexDirection: ({ direction }) => direction,
    alignItems: ({ items }) => items,
    justifyContent: ({ justify }) => justify,
    '& > *:not(:last-child)': {
      marginBottom: ({ direction, spacing }) =>
        direction === 'column' || direction === 'column-reverse'
          ? theme.spacing(spacing)
          : null,
      marginRight: ({ direction, spacing }) =>
        direction === 'row' || direction === 'row-reverse'
          ? theme.spacing(spacing)
          : null,
    },
  },
}))
const Stack = ({
  className,
  style,
  children,
  direction = 'row',
  spacing = 0,
  flex = '0 1 auto',
  wrap = 'nowrap',
  items = 'normal',
  justify = 'normal',
  ...props
}) => {
  const classes = useStyles({ spacing, direction, items, justify, flex, wrap })

  return (
    <div className={cx(classes.root, className)} style={style} {...props}>
      {children}
    </div>
  )
}

export default Stack
