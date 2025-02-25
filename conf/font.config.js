/**
 * 网站字体相关配置
 *
 */
module.exports = {
  // START ************网站字体*****************
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans font-light', // 可以继续使用 font-light 调整粗细
  FONT_URL: [
    'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap', // 添加 Lato 字体链接
  ],
  // 无衬线字体 例如 '"Lato"'
  FONT_SANS: [
    '"Lato"',  // 使用 Lato 作为无衬线字体
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Helvetica',
    '"Arial"',
    'sans-serif',
  ],
  // 衬线字体 例如 '"Times New Roman"'
  FONT_SERIF: [
    '"Times New Roman"',
    'Georgia',
    'serif',
  ],
  FONT_AWESOME:
    process.env.NEXT_PUBLIC_FONT_AWESOME_PATH ||
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' // 保持 font-awesome 字体图标地址
  // END ************网站字体*****************
}
