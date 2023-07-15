#!/bin/sh

python3 manage.py migrate
npm run build:dev
python3 manage.py collectstatic
uwsgi --http :8000 --wsgi-file /opt/luxury_tour_in_nepal/core/wsgi.py
