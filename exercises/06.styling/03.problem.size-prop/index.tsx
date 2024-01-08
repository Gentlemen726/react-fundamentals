import * as ReactDOM from 'react-dom/client'

function Box({
	style = {},
	className = '',
	// 🐨 add a size prop here
	...otherProps // 🦺 union this with an object that has a size prop type here which is
	// optional and one of "small", "medium", or "large"
}: React.HTMLAttributes<HTMLDivElement>) {
	// 🐨 based on the size prop, define a new variable called sizeClassName
	return (
		<div
			// 🐨 add the sizeClassName to the className prop
			className={`box ${className}`}
			style={{ fontStyle: 'italic', ...style }}
			{...otherProps}
		/>
	)
}

function App() {
	return (
		<div>
			{/* 🐨 update all these boxes to use the size prop */}
			<Box className="box--small" style={{ backgroundColor: 'lightblue' }}>
				small lightblue box
			</Box>
			<Box className="box--medium" style={{ backgroundColor: 'pink' }}>
				medium pink box
			</Box>
			<Box className="box--large" style={{ backgroundColor: 'orange' }}>
				large orange box
			</Box>
			<Box>sizeless colorless box</Box>
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)
