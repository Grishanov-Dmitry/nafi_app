import { useState } from 'react'
import { EmailPrepareDialog, type IFormData } from '../EmailPrepareDialog/EmailPrepareDialog'
import { PreparedEmail } from '../PreparedEmail/PreparedEmail'

export const EmailPrepare = () => {
  const [isShowResult, setIsShowResult] = useState<boolean>(false)
  const [formData, setFormData] = useState<IFormData>({})

  const showResult = (data: IFormData) => {
    setIsShowResult(true)
    setFormData(data)
  }

  return (isShowResult ? <PreparedEmail formData={formData} /> : <EmailPrepareDialog showResult={showResult} />)
}
