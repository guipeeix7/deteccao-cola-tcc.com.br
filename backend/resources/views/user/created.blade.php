<x-mail::message>
<h2>Prezado(a) {{ $username }},</h2>
<p>
Bem-vindo ao {{ config('app.name') }}! Estamos animados por tê-lo conosco. Obrigado por escolher nossa plataforma para melhorar seu desempenho nos estudos para sua certa aprovação no concurso!.<br>
</p>
<p>
Fique a vontade para desfrutar de tudo que nossa plataforma proporciona. (;
</p>
<br>
<p>
Atenciosamente,
</p>
<p>
Equipe {{ config('app.name') }}
</p>
<p>
{{ config('mail.from.address')}}<br>
</p>
</x-mail::message>

