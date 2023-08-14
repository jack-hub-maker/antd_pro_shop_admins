import { Button, Card } from 'antd'
import React, { useState } from 'react'
import CheckCalendar from './components/CheckCalendar'

const Three7 = () => {
    const [showCalendar, setShowCalendar] = useState(true)

    return (
        <div>
            <Card>

                {/* <Button onClick={() => setShowCalendar(true)}>打开</Button> */}
                <CheckCalendar
                    visible={showCalendar}
                    onClose={() => {
                        setShowCalendar(false)
                    }}
                    onConfirm={(isCheck: any) => {
                        console.log(isCheck)
                        // setShowCalendar(false)
                    }}
                />
            </Card>
        </div>
    )
}

export default Three7