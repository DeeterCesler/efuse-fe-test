import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('page loads', async () => {
  render(<App />)
  const profilePic = await screen.findByAltText('your pfp')
  expect(profilePic).toBeInTheDocument()
})

test('user can write into the post input', async () => {
  render(<App />)
  const newPostInput = await screen.findByPlaceholderText(
    "What's on your mind?",
    {},
  )
  fireEvent.change(newPostInput, { target: { value: 'test' } })
  expect(screen.getByDisplayValue('test')).toBeInTheDocument()
})

test('user writing in post input enables the "Post" button', async () => {
  render(<App />)
  const newPostInput = await screen.findByPlaceholderText(
    "What's on your mind?",
  )
  expect(newPostInput).toBeInTheDocument()
  const submitButton = await screen.findByText('Post')
  expect(submitButton).toBeInTheDocument()
  expect(submitButton).toBeDisabled()
  fireEvent.change(newPostInput, { target: { value: 'test' } })
  expect(screen.getByDisplayValue('test')).toBeInTheDocument()
  const alteredSubmitButton = await screen.findByText('Post')
  expect(alteredSubmitButton).toBeEnabled()
})

// potential tests to add (multi-step)
// 1. check color of buttons (normal, hover, active)
// 2. make sure hype counter is incrementing
// 3. make sure hype counter is decrementing
// 4. check mobile dimensions
// 5. user can submit a post
// 6. user can add a comment
