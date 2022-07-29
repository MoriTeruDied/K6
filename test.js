// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 30, duration: '5m' }

export default function main() {
    let response

    group('page_1 - https://rusagro.live/', function () {
        response = http.post(
            'https://mc.yandex.ru/webvisor/66809866?wmode=0&wv-part=3&wv-hit=491844045&page-url=https%3A%2F%2Frusagro.live%2F&rn=694668511&wv-type=3&browser-info=gdpr%3A14%3Aet%3A1658997314%3Aw%3A1519x634%3Av%3A850%3Az%3A180%3Ai%3A20220728113513%3Au%3A1658997299703659591%3Avf%3A1hc9dnhfark4nldxqmebc%3Awe%3A1%3Ast%3A1658997314&t=gdpr(14)ti(2)',
            '\n\u0016\bÿd\u0012\u0011\u001a\u000f\b\u0000\u0010¨\u0001\u0018\u0000"\u0006\bÆ\t\u0010ø\u0001\n\u0016\bïe\u0012\u0011\u001a\u000f\b\u0000\u0010¨\u0001\u0018\u0000"\u0006\bÆ\t\u0010ø\u0001\n\u0016\b÷f\u0012\u0011\u001a\u000f\b\u0000\u0010¨\u0001\u0018\u0000"\u0006\bÅ\t\u0010à\u0001\n\u0019\b¼g\u0012\u0014\u001a\u0012\b\u0015\u0018\u0000j\f\bï\u000b\u0010ú\u0004\u0018Ò\f ð\u001d\n\u0016\bÜg\u0012\u0011\u001a\u000f\b\u0000\u0010¨\u0001\u0018\u0000"\u0006\b\t\u0010¹\u0001\n\u0016\bÐh\u0012\u0011\u001a\u000f\b\u0000\u0010¨\u0001\u0018\u0000"\u0006\b\b\u0010\u0001\n\u0016\bÁi\u0012\u0011\u001a\u000f\b\u0000\u0010¨\u0001\u0018\u0000"\u0006\b\b\u0010\u0001\n\u0015\b°k\u0012\u0010\u001a\u000e\b\u0004\u0010\u0001\u0018\u0000*\u0006\b\u0000\u0010\u0000\u0018\u0001\n\u0016\b£l\u0012\u0011\u001a\u000f\b\u0004\u0010\u0001\u0018\u0000*\u0007\b\u0000\u0010\u0001\u0018\u0001\n\u0016\bm\u0012\u0011\u001a\u000f\b\u0004\u0010\u0001\u0018\u0000*\u0007\b\u0000\u0010Í\u0002\u0018\u0001\n\u0005\u0012\u00030\u0006',
            {
                headers: {
                    'content-type': 'text/plain',
                    'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        sleep(1.9)

        response = http.post(
            'https://mc.yandex.ru/watch/66809866?page-url=https%3A%2F%2Frusagro.live%2F&charset=utf-8&browser-info=nb%3A1%3Acl%3A300%3Aar%3A1%3Agdpr%3A14%3Avf%3A1hc9dnhfark4nldxqmebc%3Afu%3A0%3Aen%3Autf-8%3Ala%3Aru-RU%3Av%3A850%3Acn%3A1%3Adp%3A1%3Als%3A203445273588%3Ahid%3A491844045%3Az%3A180%3Ai%3A20220728113515%3Aet%3A1658997316%3Ac%3A1%3Arn%3A50116906%3Arqn%3A2%3Au%3A1658997299703659591%3Aw%3A1519x634%3As%3A1536x864x24%3Ask%3A1.25%3Acpf%3A1%3Aeu%3A0%3Ans%3A1658997297714%3Awv%3A2%3Aco%3A0%3Aadb%3A2%3App%3A3629563401%3Arqnl%3A1%3Ast%3A1658997316&t=gdpr(14)clc(0-0-0)lt(36700)aw(1)rqnt(2)ecs(1)rqnl(1)ti(0)&force-urlencoded=1',
            null,
            {
                headers: {
                    'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.post(
            'https://mc.yandex.ru/webvisor/66809866?wmode=0&wv-part=4&wv-hit=491844045&page-url=https%3A%2F%2Frusagro.live%2F&rn=963536594&wv-type=3&browser-info=gdpr%3A14%3Aet%3A1658997316%3Aw%3A1519x634%3Av%3A850%3Az%3A180%3Ai%3A20220728113515%3Au%3A1658997299703659591%3Avf%3A1hc9dnhfark4nldxqmebc%3Awe%3A1%3Ast%3A1658997316&t=gdpr(14)ti(2)',
            '\n\u0016\büm\u0012\u0011\u001a\u000f\b\u0004\u0010\u0001\u0018\u0000*\u0007\b\u0000\u0010Î\u0002\u0018\u0001\n\u0016\bðn\u0012\u0011\u001a\u000f\b\u0004\u0010\u0001\u0018\u0000*\u0007\b\u0000\u0010½\u0004\u0018\u0001\n\u0016\bp\u0012\u0011\u001a\u000f\b\u0004\u0010\u0001\u0018\u0000*\u0007\b\u0000\u0010Ý\u0005\u0018\u0001\n\u0016\bp\u0012\u0011\u001a\u000f\b\u0000\u0010Ò\u0001\u0018\u0000"\u0006\b\b\u0010\u0001\n\u0016\b¨p\u0012\u0011\u001a\u000f\b\u0004\u0010\u0001\u0018\u0000*\u0007\b\u0000\u0010Þ\u0005\u0018\u0001\n\u0016\bq\u0012\u0011\u001a\u000f\b\u0000\u0010ò\u0002\u0018\u0000"\u0006\b\b\u0010\u0001\n\u0016\bq\u0012\u0011\u001a\u000f\b\u0004\u0010\u0001\u0018\u0000*\u0007\b\u0000\u0010Æ\u0007\u0018\u0001\n\u0016\b©r\u0012\u0011\u001a\u000f\b\u0000\u0010î\u0002\u0018\u0000"\u0006\b\b\u0010\u0001\n\u0016\bÈr\u0012\u0011\u001a\u000f\b\u0004\u0010\u0001\u0018\u0000*\u0007\b\u0000\u0010í\b\u0018\u0001\n\u0016\bôr\u0012\u0011\u001a\u000f\b\u0004\u0010\u0001\u0018\u0000*\u0007\b\u0000\u0010ï\b\u0018\u0001\n\u0016\bØs\u0012\u0011\u001a\u000f\b\u0004\u0010\u0001\u0018\u0000*\u0007\b\u0000\u0010\u000b\u0018\u0001\n\u0016\bês\u0012\u0011\u001a\u000f\b\u0000\u0010â\u0001\u0018\u0000"\u0006\b\b\u0010\u0001\n\u0016\bðt\u0012\u0011\u001a\u000f\b\u0004\u0010\u0001\u0018\u0000*\u0007\b\u0000\u0010ý\u000b\u0018\u0001\n\u0016\bÎu\u0012\u0011\u001a\u000f\b\u0000\u0010Ä\u0004\u0018\u0000"\u0006\b\b\u0010\u0001\n\u0016\b·v\u0012\u0011\u001a\u000f\b\u0000\u0010Ä\u0004\u0018\u0000"\u0006\bù\u0007\u0010¬\u0001\n\u0016\b«w\u0012\u0011\u001a\u000f\b\u0000\u0010à\u0004\u0018\u0000"\u0006\b\u0007\u0010Ì\u0001\n\u0016\bx\u0012\u0011\u001a\u000f\b\u0000\u0010Ü\u0004\u0018\u0000"\u0006\b\u0006\u0010Ô\u0001\n\u0016\bóx\u0012\u0011\u001a\u000f\b\u0000\u0010Ô\u0004\u0018\u0000"\u0006\bÀ\u0005\u0010Ï\u0001\n\u0016\b×y\u0012\u0011\u001a\u000f\b\u0000\u0010Ô\u0004\u0018\u0000"\u0006\bÅ\u0004\u0010Æ\u0001\n\u0016\b{\u0012\u0011\u001a\u000f\b\u0000\u0010Ô\u0004\u0018\u0000"\u0006\b°\u0004\u0010Ä\u0001\n\u0016\bþ|\u0012\u0011\u001a\u000f\b\u0000\u0010Ô\u0004\u0018\u0000"\u0006\b¯\u0004\u0010Ä\u0001\n\u0005\u0012\u00030¸\u0006',
            {
                headers: {
                    'content-type': 'text/plain',
                    'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.post(
            'https://mc.yandex.ru/watch/66809866?page-url=https%3A%2F%2Frusagro.weconf.live%2Fauth%2Ffairy-games%2Fregister&page-ref=https%3A%2F%2Frusagro.live%2F&charset=utf-8&ut=noindex&browser-info=ln%3A1%3Agdpr%3A14%3Avf%3A1hc9dnhfark4nldxqmebc%3Afu%3A3%3Aen%3Autf-8%3Ala%3Aru-RU%3Av%3A850%3Acn%3A1%3Adp%3A1%3Als%3A203445273588%3Ahid%3A491844045%3Az%3A180%3Ai%3A20220728113515%3Aet%3A1658997316%3Ac%3A1%3Arn%3A472482973%3Arqn%3A3%3Au%3A1658997299703659591%3Aw%3A1519x634%3As%3A1536x864x24%3Ask%3A1.25%3Acpf%3A1%3Aeu%3A0%3Ans%3A1658997297714%3Awv%3A2%3Aco%3A0%3Aadb%3A2%3App%3A3629563401%3Arqnl%3A1%3Ast%3A1658997316%3At%3A%D0%97%D0%B0%D1%80%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F&t=gdpr(14)clc(0-0-0)lt(36700)aw(1)rqnt(3)ecs(1)rqnl(1)ti(0)&force-urlencoded=1',
            null,
            {
                headers: {
                    'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.post(
            'https://mc.yandex.ru/clmap/66809866?page-url=https%3A%2F%2Frusagro.live%2F&pointer-click=rn%3A647804538%3Ax%3A43775%3Ay%3A15564%3At%3A166%3Ap%3A%3BAAA2%C2%84%3AX%3A558%3AY%3A1730&browser-info=gdpr%3A14%3Au%3A1658997299703659591%3Av%3A850%3Avf%3A1hc9dnhfark4nldxqmebc%3Arqnl%3A1%3Ast%3A1658997316&t=gdpr(14)rqnl(1)ti(0)&force-urlencoded=1',
            null,
            {
                headers: {
                    'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        sleep(4.6)

        response = http.post(
            'https://mc.yandex.ru/webvisor/66809866?wmode=0&wv-part=5&wv-hit=491844045&page-url=https%3A%2F%2Frusagro.live%2F&rn=667201166&wv-type=3&browser-info=gdpr%3A14%3Aet%3A1658997320%3Aw%3A1519x634%3Av%3A850%3Az%3A180%3Ai%3A20220728113520%3Au%3A1658997299703659591%3Avf%3A1hc9dnhfark4nldxqmebc%3Awe%3A1%3Ast%3A1658997320&t=gdpr(14)ti(2)',
            '\n\u0016\b~\u0012\u0011\u001a\u000f\b\u0000\u0010Ô\u0004\u0018\u0000"\u0006\b®\u0004\u0010Ä\u0001\n\r\b¶~\u0012\b\u001a\u0006\b\u0007\u0010\u0002\u0018\u0000\n\u0016\b¸~\u0012\u0011\u001a\u000f\b\u0002\u0010Ô\u0004\u0018\u0000"\u0006\b®\u0004\u0010Ä\u0001\n\u000e\b»~\u0012\t\u001a\u0007\b\u0007\u0010Ô\u0004\u0018\u0000\n\u0016\b¬\u0012\u0011\u001a\u000f\b\u0001\u0010Ô\u0004\u0018\u0000"\u0006\b®\u0004\u0010Ä\u0001\n\u0016\b¯\u0012\u0011\u001a\u000f\b\u0003\u0010Ô\u0004\u0018\u0000"\u0006\b®\u0004\u0010Ä\u0001\n\r\bÐ\u0012\b\u001a\u0006\b\b\u0018\u00002\u0000\n\r\bÑ\u0012\b\u001a\u0006\b\b\u0018\u00002\u0000\n\u000b\bÑ\u0012\u0006\u001a\u0004\b\u0005\u0018\u0000\n\u0016\bÒ\u0012\u0011\u001a\u000f\b\u0000\u0010Ô\u0004\u0018\u0000"\u0006\b®\u0004\u0010Ä\u0001\n\u0005\u0012\u00030«\u000e',
            {
                headers: {
                    'content-type': 'text/plain',
                    'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        sleep(10)

        response = http.post(
            'https://mc.yandex.ru/webvisor/66809866?wv-check=64765&wv-type=0&wmode=0&wv-part=1&wv-hit=491844045&page-url=https%3A%2F%2Frusagro.live%2F&rn=631107145&browser-info=gdpr%3A14%3Aet%3A1658997330%3Aw%3A1519x634%3Av%3A850%3Az%3A180%3Ai%3A20220728113530%3Au%3A1658997299703659591%3Avf%3A1hc9dnhfark4nldxqmebc%3Awe%3A1%3Ast%3A1658997330&t=gdpr(14)ti(2)',
            'wv-data=D0kOZg9nDuYCAQFEACsAANIM8B0AAQJMAQ0AAQNGAgcAUwBFAEMAVABJAE8ATgD-Be8LwAgAAQRAAxoCuAGvDYAJUAABBUwEGgABBkQFGrgBrw3ABFAAAQdEBgHYAa8NgARQACDoAgfWAhMBD*kC',
            {
                headers: {
                    'content-type': 'text/plain',
                    'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })
}