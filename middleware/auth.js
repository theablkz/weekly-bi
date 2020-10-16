export default async function ({ app, store, redirect }) {
  // If the user is not authenticated
  const encodedUserPswd = app.$cookies.get('token')
  return await app.$axios.$get('http://offersapi.bi.group/admin/login', {
    headers: {
      Authorization: `Basic ${encodedUserPswd}`
    }
  }).catch(err => {
    return redirect('/auth')
  })

}
