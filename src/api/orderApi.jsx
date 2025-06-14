import axios from 'axios'

const BASEURL = 'http://localhost:8080/api/v1'

export async function getAllOrderGet(){
  const res = await axios.get(`${BASEURL}/order/rental/all?page=0&size=1000`)
  return res.data.data.content
}

export async function updateUserRolePut(userId, roleId, token){
  await axios.put(`${BASEURL}/order/rental/all?page=0&size=1000&sortDir=asc&userId=8`,
    {
      userId: userId,
      roleId: roleId,
    },
    {
      headers: {
        Authorization: `${token}`
      }
    }
  )
}

export async function userAllRentalOrderGet(userId, token){
  const res = await axios.get(`${BASEURL}/order/rental/all?page=0&size=1000&sortDir=asc&userId=${userId}`,
    {
      headers: {
        Authorization: `${token}`
      }
    }
  )
  return res.data.data.content
}

export async function userAllReturnedOrderGet(userId, token){
  const res = await axios.get(`${BASEURL}/order/rented/all?page=0&size=100&sortDir=asc&userId=${userId}`,
    {
      headers: {
        Authorization: `${token}`
      }
    }
  )
  return res.data.data.content
}

export async function updateOrderStatus(orderId, status, token){
  if(status === 'Received'){
    await axios.put(`${BASEURL}/order/rental/update/confirm/${orderId}`,
      {
        headers: {
          Authorization: `${token}`
        }
      }
    )
    return 
  }
  await axios.put(`${BASEURL}/order/rental/update/status/order/${orderId}?newStatus=${status}`,
      {
        headers: {
          Authorization: `${token}`
        }
      }
    )
}