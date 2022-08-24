import http from '@/utils/http'
import { ElFile } from 'element-plus/es/components/upload/src/upload.type'

export const singleUpload = async (params: ElFile) => {
  const formData = new FormData()
  formData.append('file', params)
  const RES = await http.upload('/uploadFile', formData)
  return RES
}
