import React, { Component } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react';
import koLocale from '@fullcalendar/core/locales/ko'; // 한글 로케일 파일 가져오기

export default class DashBoard extends Component {
    constructor(props) {
        super(props);
    }

    dateClick = (info) => {
        alert(info.dateStr);
    }

    dayCellContent = (arg) => {
        // 각 날짜 셀의 내용을 설정 (일의 '일' 부분을 제외)
        const dayOfMonth = arg.dayNumberText.replace('일', '');
        return <span>{dayOfMonth}</span>;
    }

    render() {
        return (
            <>
                <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 50, width: '80%' }}>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView={'dayGridMonth'}
                        headerToolbar={
                            {
                                start: 'today',
                                center: 'title',
                                end: 'prev,next'
                            }
                        }
                        height={"85vh"}
                        dateClick={this.dateClick}
                        events={[
                            { title: '챌린지 시작', date: '2023-11-11' },
                            { title: '미션', date: '2023-11-23' }
                        ]}
                        locale={koLocale} // 한글 로케일 설정
                        dayCellContent={this.dayCellContent} // 각 날짜 셀의 내용 커스터마이즈
                        // events 부분에 백에서 받아온 미션을 받아오는 코드로 수정해야 됨
                    />
                </div>
            </>
        );
    }
}
