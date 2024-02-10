export async function fetchNui<Data>(
  eventName: string,
  data?: Data
): Promise<Data> {
  const resourceName = window.GetParentResourceName()

  const response = await fetch(`https://${resourceName}/${eventName}`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })

  return await response.json()
}

declare global {
  interface Window {
    GetParentResourceName: () => string
  }
}

export default fetchNui
