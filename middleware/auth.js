export default async function ({ app, store, redirect }) {
  // If the user is not authenticated
  const encodedUserPswd = app.$cookies.get('token')
  return await app.$axios.$get('http://185.125.46.99:8080/admin/login', {
    headers: {
      Authorization: `Basic ${encodedUserPswd}`
    }
  }).catch(err => {
    return redirect('/auth')
  })

}
