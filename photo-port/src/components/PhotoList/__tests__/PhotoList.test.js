import React from "react";
import PhotoList from "../PhotoList";
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);

describe('PhotoList is rendering', () => {
    it('renders', () => {
        render(<PhotoList />)
    })
    it('renders', () => {
        const { asFragment } = render(<PhotoList />)
        expect(asFragment()).toMatchSnapshot()
    })
})