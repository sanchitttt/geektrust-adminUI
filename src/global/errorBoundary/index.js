import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(err, errInfo) {

    }
    render() {
        if (this.state.hasError) {
            return <div className='w-[100%] h-[100%] flex flex-col items-center justify-center'>
                <h1 className='text-[20px] font-bold'>Something went wrong!</h1>
                <h1 className='text-[10px]'>We apologize for the inconvenience</h1>
            </div>

        }
        return (
            this.props.children
        )
    }
}