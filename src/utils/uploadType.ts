import { ElFile } from 'element-plus/es/components/upload/src/upload.type'
export const beforeUploadImg = (file: ElFile) => {
  const isJPG = file.type === 'image/jpeg'
  const isPNG = file.type === 'image/png'
  const isLt10M = file.size / 1024 / 1024 < 10
  if (!isJPG && !isPNG) {
    return { msg: '上传图片只能是 JPG 或者 PNG 格式!' }
  }
  if (isJPG && isPNG) {
    if (!isLt10M) {
      return { msg: '上传图片大小不能超过 10MB!' }
    }
  }
}
