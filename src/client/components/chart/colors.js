import Color from 'color-js'

export const red = Color('#fa0000')
export const black = Color('#0a0202')
export const white = Color('#faf0f0')

export const doping = {
  normal: red,
  hover: red.desaturateByRatio(0.2)
}

export const noDoping = {
  normal: black
}
