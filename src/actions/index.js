
// * contactsLoaded(contacts)
//     * return an action
//     * type is “CONTACTS_LOADED”
//     * value is contacts
export const contactsLoaded = (contacts) => {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  }
}

export const loadContacts = () => {
  return ((dispatch) => {
    fetch('/contacts')
    .then((response) => {
      return response.json();
    })
    .then((contacts) => {
      return dispatch(contactsLoaded(contacts));
    });
  })
}

// * vehiclesLoaded(vehicles)
//     * return an action
//     * type is “VEHICLES_LOADED”
//     * value is vehicles
export const vehiclesLoaded = (vehicles) => {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  }
}

// * loadVehicles
//     * return a thunk function
//     * make a fetch call to /vehicles
//     * in the second then, dispatch to vehiclesLoaded
export const loadVehicles = () => {
  return (
    (dispatch) => {
      fetch('/vehicles')
      .then((response) => {
        return response.json()
      })
      .then((vehicles) => {
        return dispatch(vehiclesLoaded(vehicles));
      })
    }
  )
}

// * commentsLoaded(comments)
//     * return an action
//     * type is “COMMENTS_LOADED”
//     * value is comments

export const commentsLoaded = (comments) => {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  }
}

// * loadComments
//     * return a thunk function
//     * make a fetch call to /comments
//     * in the second then, dispatch to commentsLoaded

export const loadComments = () => {
  return (
    (dispatch) => {
      fetch('/comments')
      .then((response) => {
        return response.json()
      })
      .then((comments) => {
        return dispatch(commentsLoaded(comments));
      })
    }
  )
}

// * productsLoaded(products)
//     * return an action
//     * type is “PRODUCTS_LOADED”
//     * value is products

export const productsLoaded = (products) => {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  }
}

// * loadProducts
//     * return a thunk function
//     * make a fetch call to /products
//     * in the second then, dispatch to productsLoaded
export const loadProducts = (product) => {
  return (
    (dispatch) => {
      fetch('/products')
      .then((response) => {
        return response.json()
      })
      .then((products) => {
        return dispatch(productsLoaded(products));
      })
    }
  )
}

// * createProduct(product)
//    * return a thunk function
//    * make a fetch call to /products as a POST
//    * include the product in the body 
//    * in the first then, dispatch to loadProducts

export const createProduct = (product) => {
  return (
    (dispatch) => {
      fetch('/products',
    {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(product: product )
    })
      .then(dispatch(loadProducts(product)))
    })
  }

  // * createContact(contact)
  //  * return a thunk function
  //  * make a fetch call to /contacts as a POST
  //  * include the contact in the body 
  //  * in the first then, dispatch to loadContacts

  export const createContact = (contact) => {
    return (
      (dispatch) => {
        fetch('/contacts',
      {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(contact: contact )
      })
        .then(dispatch(loadContacts(contact)))
      })
    }

  //   * createComment(comment)
  //  * return a thunk function
  //  * make a fetch call to /comments as a POST
  //  * include the comment in the body 
  //  * in the first then, dispatch to loadComments
  export const createComment = (comment) => {
    return (
      (dispatch) => {
        fetch('/comments',
      {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(comment: comment )
      })
        .then(dispatch(loadComments(comment)))
      })
    }

  //   * createVehicle(vehicle)
  //  * return a thunk function
  //  * make a fetch call to /vehicles as a POST
  //  * include the vehicle in the body 
  //  * in the first then, dispatch to loadVehicles
  export const createVehicle = (vehicle) => {
    return (
      (dispatch) => {
        fetch('/vehicles',
      {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(vehicle: vehicle )
      })
        .then(dispatch(loadVehicles(vehicle)))
      })
    }