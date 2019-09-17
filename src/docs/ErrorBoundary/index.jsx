import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something wen wrong</h1>
        }
        return this.props.children;
    }
}