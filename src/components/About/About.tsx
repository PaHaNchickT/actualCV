'use client';

import { Avatar, Button, Card, CardBody, CardHeader, Link } from '@nextui-org/react';
import { useState, type ReactElement } from 'react';

import { DIPLOMAS, EDUCATION, STACK } from '@/constants/about-constants';
import { ASSETS_PATH } from '@/constants/work-constants';

const About = (): ReactElement => {
  const [counter, setCounter] = useState(1);
  console.log(counter);

  const linkEpam = (
    <Link href="https://learn.epam.com/start" target="_blank">
      EPAM
    </Link>
  );
  const linkRSS = (
    <Link href="https://rs.school/courses" target="_blank">
      The Rolling Scopes School
    </Link>
  );

  return (
    <div className="w-full p-10 relative z-[2] flex flex-col items-center gap-10">
      <h3 className="font-black text-5xl text-center">About me</h3>
      <div className="flex flex-col gap-5 w-[800px]">
        <Card className="p-4 max-w-[800px]" shadow="lg">
          <CardBody className="overflow-visible py-2">
            <div className="flex gap-5 justify-between items-center">
              <div className="flex flex-col gap-5">
                <Avatar src={ASSETS_PATH.avatar} className="w-[200px] h-[200px] shadow-[0_0_20px_7px_background]" />
                <div>
                  <p>
                    <span className="text-primary mr-1">Возраст:</span> 25
                  </p>
                  <p>
                    <span className="text-primary mr-1">Статус:</span> Ищу работу
                  </p>
                </div>
              </div>
              <p className="w-8/12 text-justify">
                Фронтенд разработка для меня – это в первую очередь творчество, идеальный баланс между интеллектуальной
                работой и выражением эмоций. Ввиду своей эмпатичности я успешно нахожу общий язык с людьми и легко
                вливаюсь в коллектив. Стремлюсь решать задачи эффективно и с творческим подходом, поэтому планирую
                достигнуть высоких показателей результативности работы. Обладаю следующими качествами:
                целеустремленность, легко обучаемость, организаторские способности. Постоянно занимаюсь саморазвитием.
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="p-4 max-w-[800px]" shadow="lg">
          <CardBody className="overflow-visible py-2">
            <div className="flex gap-5 justify-between items-center">
              <div>
                <div></div>
                <div>
                  <Button
                    color="primary"
                    onPress={() => {
                      if (counter > 1) setCounter((prevCount) => prevCount - 1);
                    }}
                    isDisabled={counter > 1 ? false : true}
                    className="text-background font-black"
                  >
                    {'<'}
                  </Button>
                  <Button
                    color="primary"
                    onPress={() => {
                      if (counter < DIPLOMAS.length) setCounter((prevCount) => prevCount + 1);
                    }}
                    isDisabled={counter < DIPLOMAS.length ? false : true}
                    className="text-background font-black"
                  >
                    {'>'}
                  </Button>
                </div>
              </div>
              <p className="w-8/12 text-justify">
                Во время обучения в онлайн школах от {linkEpam} и {linkRSS} я приобрел навыки разработки приложений на
                JavaScript, TypeScript и React. Среди них были как одностраничные приложения и игры, так и полноценные
                многостраничные сайты, сверстанные по макетам Figma. При написании кода я чётко следую концепциям DRY,
                KISS и YAGNI, а благодаря регулярным перекрестным проверкам работ, я имею уверенные навыки Code Review.
                Во время финальных проектов я также изучил методологию Agile и приобрел опыт коллективной разработки по
                Scrum, используя доски Jira и gh project.
              </p>
            </div>
          </CardBody>
        </Card>
        <div className="flex gap-5">
          <div className="flex flex-col gap-5">
            <Card className="p-4 max-w-[800px]" shadow="lg">
              <CardHeader className="text-primary">Образование</CardHeader>
              <CardBody className="overflow-visible py-2 pl-7">
                <ul className="list-disc marker:text-primary">
                  {EDUCATION.map((item, index) => (
                    <li key={index}>
                      <p>{item.name}</p>
                      <p className="font-black">{item.degree}</p>
                      <p className="text-primary">{item.duration}</p>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
            <Card className="p-4 max-w-[800px]" shadow="lg">
              <CardHeader className="text-primary">Языки</CardHeader>
              <CardBody className="overflow-visible py-2">
                <p className="text-justify">
                  Английский (<span className="text-primary">B2</span> - Upper-Intermediate)
                </p>
              </CardBody>
            </Card>
            <Card className="p-4 max-w-[800px]" shadow="lg">
              <CardHeader className="text-primary">Хобби</CardHeader>
              <CardBody className="overflow-visible py-2">
                <p className="text-justify">
                  В свободное время я играю на гитаре и ударных, а также веду свой YouTube канал.
                </p>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="p-4 max-w-[800px] h-full" shadow="lg">
              <CardHeader className="text-primary">Cтек</CardHeader>
              <CardBody className="overflow-visible py-2 pl-7 h-full">
                <ul className="list-disc marker:text-primary h-full flex flex-col justify-between">
                  {STACK.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <Button color="primary" size="lg" className="text-background">
        Скачать CV
      </Button>
    </div>
  );
};

export default About;
