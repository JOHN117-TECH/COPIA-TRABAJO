import { useInstance } from "./useInstance"

const GetCurrentInstance = () => {
  const { config } = useInstance()
  return config.instanceId
}

export default GetCurrentInstance
