// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 10, duration: '5m' }

export default function main() {
    let response

    group('page_1 - https://rusagro.live/', function () {
        response = http.post(
            'https://mc.yandex.ru/watch/66809866?page-url=https%3A%2F%2Frusagro.weconf.live%2Fauth%2Ffairy-games%2Flogin&page-ref=https%3A%2F%2Frusagro.live%2F&charset=utf-8&ut=noindex&browser-info=ln%3A1%3Agdpr%3A14%3Avf%3A1hc9dnhfark4nldxqmebc%3Afu%3A3%3Aen%3Autf-8%3Ala%3Aru-RU%3Av%3A850%3Acn%3A1%3Adp%3A1%3Als%3A203445273588%3Ahid%3A491844045%3Az%3A180%3Ai%3A20220728132525%3Aet%3A1659003926%3Ac%3A1%3Arn%3A638951132%3Arqn%3A4%3Au%3A1658997299703659591%3Aw%3A750x608%3As%3A1536x864x24%3Ask%3A1.25%3Acpf%3A1%3Aeu%3A0%3Ans%3A1658997297714%3Anp%3AV2luMzI%3D%3Ads%3A%2C%2C%2C%2C%2C%2C%2C%2C%2C20481%2C20481%2C0%2C%3Awv%3A2%3Aco%3A0%3Aadb%3A2%3App%3A3629563401%3Arqnl%3A1%3Ast%3A1659003926%3At%3A%D0%92%D0%BE%D0%B9%D1%82%D0%B8&t=gdpr(14)clc(1-558-196)lt(71800)aw(1)rqnt(4)ecs(1)fid(50)rqnl(1)ti(0)&force-urlencoded=1',
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
            'https://mc.yandex.ru/clmap/66809866?page-url=https%3A%2F%2Frusagro.live%2F&pointer-click=rn%3A741210772%3Ax%3A41962%3Ay%3A28086%3At%3A66264%3Ap%3A%3BA1AA2%C2%84%3AX%3A476%3AY%3A3154&browser-info=gdpr%3A14%3Au%3A1658997299703659591%3Av%3A850%3Avf%3A1hc9dnhfark4nldxqmebc%3Arqnl%3A1%3Ast%3A1659003926&t=gdpr(14)rqnl(1)ti(0)&force-urlencoded=1',
            null,
            {
                headers: {
                    'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        sleep(2.7)

        response = http.post(
            'https://mc.yandex.ru/webvisor/66809866?wmode=0&wv-part=17&wv-hit=491844045&page-url=https%3A%2F%2Frusagro.live%2F&rn=557917595&wv-type=3&browser-info=gdpr%3A14%3Aet%3A1659003928%3Aw%3A750x608%3Av%3A850%3Az%3A180%3Ai%3A20220728132528%3Au%3A1658997299703659591%3Avf%3A1hc9dnhfark4nldxqmebc%3Awe%3A1%3Ast%3A1659003928&t=gdpr(14)ti(2)',
            '\n\u0018\b¨\u0003\u0012\u0011\u001a\u000f\b\u0000\u0010Ô\u0004\u0018\u0000"\u0006\bå\u0003\u0010Ò\u0003\n\u0018\bõ¨\u0003\u0012\u0011\u001a\u000f\b\u0000\u0010Ì\u0004\u0018\u0000"\u0006\bå\u0003\u0010è\u0003\n\u0018\bß©\u0003\u0012\u0011\u001a\u000f\b\u0000\u0010à\u0004\u0018\u0000"\u0006\bç\u0003\u0010ö\u0003\n\u0018\bôª\u0003\u0012\u0011\u001a\u000f\b\u0000\u0010à\u0004\u0018\u0000"\u0006\bè\u0003\u0010ô\u0003\n\u0018\bã«\u0003\u0012\u0011\u001a\u000f\b\u0000\u0010Ô\u0004\u0018\u0000"\u0006\bè\u0003\u0010Ï\u0003\n\u001b\bä«\u0003\u0012\u0014\u001a\u0012\b\u0015\u0018\u0000j\f\bî\u0005\u0010à\u0004\u0018þ\u0005 Ü)\n\u0018\bç¬\u0003\u0012\u0011\u001a\u000f\b\u0000\u0010Ô\u0004\u0018\u0000"\u0006\bç\u0003\u0010Î\u0003\n\u0018\b¯\u0003\u0012\u0011\u001a\u000f\b\u0000\u0010Ô\u0004\u0018\u0000"\u0006\bç\u0003\u0010Ï\u0003\n\u0018\b°\u0003\u0012\u0011\u001a\u000f\b\u0000\u0010Ô\u0004\u0018\u0000"\u0006\bä\u0003\u0010Ø\u0003\n\u0018\bÿ°\u0003\u0012\u0011\u001a\u000f\b\u0000\u0010Ì\u0004\u0018\u0000"\u0006\bâ\u0003\u0010ß\u0003\n\u0018\bç±\u0003\u0012\u0011\u001a\u000f\b\u0000\u0010Ì\u0004\u0018\u0000"\u0006\bâ\u0003\u0010ß\u0003\n\u0018\b×²\u0003\u0012\u0011\u001a\u000f\b\u0000\u0010à\u0004\u0018\u0000"\u0006\bß\u0003\u0010ñ\u0003\n\u0018\bÀ³\u0003\u0012\u0011\u001a\u000f\b\u0000\u0010à\u0004\u0018\u0000"\u0006\bÝ\u0003\u0010ú\u0003\n\u0018\b¿´\u0003\u0012\u0011\u001a\u000f\b\u0000\u0010à\u0004\u0018\u0000"\u0006\bÜ\u0003\u0010\u0004\n\u000f\bµ\u0003\u0012\b\u001a\u0006\b\u0007\u0010\u0002\u0018\u0000\n\u0010\bµ\u0003\u0012\t\u001a\u0007\b\u0007\u0010Ô\u0004\u0018\u0000\n\u0018\bµ\u0003\u0012\u0011\u001a\u000f\b\u0002\u0010à\u0004\u0018\u0000"\u0006\bÜ\u0003\u0010\u0004\n\u000f\bµ\u0003\u0012\b\u001a\u0006\b\b\u0018\u00002\u0000\n\u0010\bµ\u0003\u0012\t\u001a\u0007\b\u0007\u0010à\u0004\u0018\u0000\n\u0018\b¤µ\u0003\u0012\u0011\u001a\u000f\b\u0000\u0010à\u0004\u0018\u0000"\u0006\bÜ\u0003\u0010\u0004\n\u0018\b¶\u0003\u0012\u0011\u001a\u000f\b\u0000\u0010à\u0004\u0018\u0000"\u0006\bÜ\u0003\u0010\u0004\n\u0018\b¿¶\u0003\u0012\u0011\u001a\u000f\b\u0001\u0010à\u0004\u0018\u0000"\u0006\bÜ\u0003\u0010\u0004\n\u0018\bÄ¶\u0003\u0012\u0011\u001a\u000f\b\u0003\u0010à\u0004\u0018\u0000"\u0006\bÜ\u0003\u0010\u0004\n\u000f\bÕ¶\u0003\u0012\b\u001a\u0006\b\b\u0018\u00002\u0000\n\u000f\bÕ¶\u0003\u0012\b\u001a\u0006\b\b\u0018\u00002\u0000\n\r\bÖ¶\u0003\u0012\u0006\u001a\u0004\b\u0005\u0018\u0000\n\u0005\u0012\u00030?',
            {
                headers: {
                    'content-type': 'text/plain',
                    'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        sleep(25)

        response = http.post(
            'https://mc.yandex.ru/webvisor/66809866?wv-check=29968&wv-type=0&wmode=0&wv-part=3&wv-hit=491844045&page-url=https%3A%2F%2Frusagro.live%2F&rn=891043697&browser-info=gdpr%3A14%3Aet%3A1659003953%3Aw%3A750x608%3Av%3A850%3Az%3A180%3Ai%3A20220728132553%3Au%3A1658997299703659591%3Avf%3A1hc9dnhfark4nldxqmebc%3Awe%3A1%3Ast%3A1659003953&t=gdpr(14)ti(2)',
            'wv-data=DsmLCAEIQAUaAQC6GI4GOAABCUQIARC6GM4FOAAPyYsIDsmLCCDMiwgJzAMYAQ-Niwg_',
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