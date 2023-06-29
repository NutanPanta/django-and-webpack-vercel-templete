FROM python:3.8-buster

WORKDIR /opt/luxury_tour_in_nepal

COPY requirements.txt .

RUN pip3 install -r requirements.txt

COPY . .

CMD /bin/sh -c ./start.sh
