#!/bin/sh

python3 manage.py migrate
python3 manage.py collectstatic
uwsgi --http :8000 --wsgi-file /opt/luxury_tour_in_nepal/core/wsgi.py
