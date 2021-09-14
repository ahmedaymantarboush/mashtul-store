# Generated by Django 3.2.7 on 2021-09-14 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactUs', '0003_emails_isread'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='emails',
            options={'ordering': ['isRead'], 'verbose_name': 'Emails', 'verbose_name_plural': 'Emails'},
        ),
        migrations.AddField(
            model_name='emails',
            name='subject',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
    ]