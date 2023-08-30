import {render, screen, fireEvent, waitFor, userEvent, act} from '@testing-library/react-native';
import * as React from 'react'
import SignInForm from '../components/Auth/SignInForm';

describe('Sign In Component', () => {
    it('on submit gets called with correct parameters', async () => {
        const onSubmitMock = jest.fn()
        render(
            <SignInForm onSignIn={onSubmitMock}/>
        )
        const user = userEvent.setup()
        act(() => {
            fireEvent.changeText(screen.getByPlaceholderText('Username'),'TEST_USERz')
            fireEvent.changeText(screen.getByPlaceholderText('Password'),'TEST_PASSWORD')
            user.press(screen.getByTestId('SignInButton'))

        })
        await waitFor(() => {
            expect(onSubmitMock).toBeCalledWith({username:'TEST_USERz',password:'TEST_PASSWORD'})
        })
    })
})