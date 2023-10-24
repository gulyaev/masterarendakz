import React from "react";
import classes from "../../css/Blog.module.css";
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

const Blog1 = () => {
    return (
        <div className={classes.blog}>
            <div className={classes.blog__title}>
                <Title level={3}>Хотите сдать свое помещение в аренду ?</Title>
                <Paragraph style={{ fontSize: '19px', textAlign: "justify", fontWeight: "bold", color: "#3f6600" }}>
                    Почему бы не сдать его под салон ? А мы вам в этом поможем.
                </Paragraph>
                <Paragraph style={{ fontSize: '17px', textAlign: "justify" }}>
                    Сейчас много владельцев хотят сдать свое помещение в аренду, публикуя объявление для представителей всех ниш рынка, ища тех кто согласится снять его помещение, особо не разбираясь в специфике ниши.
                </Paragraph>
                <Paragraph style={{ fontSize: '17px', textAlign: "justify" }}>
                    Давайте представим что к вам пришел арендатор - магазин одежды. Он 1 арендует полностью все помещение целиком, вносит 100% суммы ежемесячно и пусть работает у вас стабильно. Но через 3 года бизнес не выдержал очередного кризиса, скачка валюты или еще какого катаклизма, к которым мы уже так привыкли и арендатор в силу неспособности оплаты аренды от вас съезжает.не выдержал очередного кризиса, скачка валюты или еще какого катаклизма, к которым мы уже так привыкли и арендатор в силу неспособности оплаты аренды от вас съезжает.
                </Paragraph>
                <Paragraph style={{ fontSize: '17px', textAlign: "justify" }}>
                    Какие минусы?
                    <p>1. Вам снова нужно тратить свое время и силы на поиск платежеспособного и что сложнее - адекватного арендатора. Знакомиться с ним, притираться к нему так или иначе. Помещение ведь ваше и нужно чтобы его содержали в порядке и не было форс-мажорных ситуаций с клиентами.</p>
                </Paragraph>
                <Paragraph style={{ fontSize: '17px', textAlign: "justify" }}>
                    2. Точка наработана клиентами именно магазина одежды, это место знают как магазин. Вывеска всегда висела магазина на этом месте. Теперь люди идут сюда и видят что тут уже не магазин или магазин но уже не того бренда который они так полюбили . Репутация заведения так или иначе страдает. Новому арендатору придется раскручивать эту точку для себя с нуля, чтобы люди привыкли и стали приходить клиенты. Будет ваше заведение с репутацией как «высокопосещаемое заведение»? Сразу конечно нет. Потребуется опять пара тройка лет. Опять все по-новой. Не очень удобно согласитесь.
                </Paragraph>
                <Paragraph style={{ fontSize: '17px', textAlign: "justify" }}>
                    3. Перепланировка помещения под нового арендатора со всеми вытекающими.
                    И еще много других тонких нюансов.
                </Paragraph>
                <Paragraph style={{ fontSize: '17px', textAlign: "justify" }}>
                    Преимущества сдачи под салон в отличие от например сдачи под магазин:
                    Как правило помещение под салон красоты сдается по частям, разделенное на рабочие места для опрелеленного мастера (маникюр, ресницы, парикмахер, визажист, косметолог и т.д.). Соответсвенно рабочие места сдаются в субаренду отдельному мастеру. Таким образом даже если один мастер(арендатор) решит уйти, то помещение все равно продолжает приносить аренду, как полноценный устойчивый бизнес, вы просто дальше ищете мастера на замену(субарендатора). По сути вы просто разделяете весь большой механизм салона на взаимозаменяемые его детали как конструктор.
                </Paragraph>
                <Paragraph style={{ fontSize: '17px', textAlign: "justify" }}>
                    И рассматривая пункт первый выше - тут проще с поиском мастера-арендатора так как по сути коллектив у вас уже сформирован и новый арендатор в него либо впишется либо нет. Впишется - хорошо, не впишется - на рынке много мастеров желающих снять в аренду хорошее место в хорошем салоне.
                </Paragraph>
                <Paragraph style={{ fontSize: '17px', textAlign: "justify" }}>
                    По второму пункту - салон остаётся на месте, вывеска и название заведения ни куда не деваются, точка как салон нарабатывается годами стабильно, тропинка протаптывается к вашему заведению годами непрерывно. При смене одного арендатора посещаемость заведения если и просядет то незначительно и не надолго.
                </Paragraph>
                <Paragraph style={{ fontSize: '17px', textAlign: "justify" }}>
                    По третьему пункту - кардинальной перепланировки в салоне с течением времени не требуется как обязательной и необходимой.
                    Если вы желаете сдать свое помещение в аренду, подумайте о салоне.
                </Paragraph>
                <Paragraph style={{ fontSize: '17px', textAlign: "justify" }}>
                    <p style={{ fontWeight: "bold", color: "#3f6600" }}>masterarenda.kz</p>
                </Paragraph>
            </div>
            <div>
            </div>
        </div >
    )
}

export default Blog1;