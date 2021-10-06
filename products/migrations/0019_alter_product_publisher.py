# Generated by Django 3.2.7 on 2021-10-06 16:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userProfile', '0017_profile_watermark'),
        ('products', '0018_product_ispremium'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='publisher',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='publisher', to='userProfile.profile'),
        ),
    ]