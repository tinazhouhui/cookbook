const rootUrl = 'http://localhost:5000'

function fetcher(endpoint, method = 'GET', body = undefined) {

  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  return fetch(`${rootUrl}/${endpoint}`, options)
}


export const getAllRecipes = async () => {
  try {
    const response = await fetcher('recipes')

    if (response.status !== 200) {
      const body = await response.json();
      console.error(body)
    }
    return response.json();

  } catch (err) {
    console.error(err.stack);
  }
}

export const saveRecipe = async (newRecipe) => {
  try {
    const response = await fetcher('recipes', 'POST', newRecipe)
    if (response.status !== 200) {
      const body = await response.json();
      console.error(body)
    }
    return response.json();
  } catch (err) {
    console.error(err.stack);
  }
}

export const deleteRecipe = async (id) => {
  try {
    const response = await fetcher(`recipes/${id}`, 'DELETE')
    if (response.status !== 200) {
      const body = await response.json();
      console.error(body)
    }
    return response.json();
  } catch (err) {
    console.error(err.stack);
  }
}

export const getRecipe = async (id) => {
  try {
    const response = await fetcher(`recipes/${id}`, 'GET')
    if (response.status !== 200) {
      const body = await response.json();
      console.error(body)
    }
    return response.json();
  } catch (err) {
    console.error(err.stack);
  }
}