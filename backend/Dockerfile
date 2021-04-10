FROM python:3.6

WORKDIR /usr/src/app
COPY requirements.txt ./

RUN pip3 install -r requirements.txt

COPY . .
ENV FLASK_APP=app.py

CMD [ "flask", "run" ]