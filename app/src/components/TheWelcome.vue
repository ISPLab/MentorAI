<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Управление задачами преподавателя</template>
    <p>Обеспечение централизованного места для создания, назначения и отслеживания выполнения заданий учениками</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Гибкость и настройка</template>
    <p>Предоставление возможности настройки образовательного процесса в соответствии с потребностями ученика и плана преподавателя </p>
    <p>настройка различных методологий управления процессами обучения</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Коммуникация</template>
    <p> Обеспечение инструментов для совместной работы  аудио, видеосвязь показ экрана.  преподавателя и ученика включая чаты, комментарии, упоминания, уведомления и тд  </p>
    <p>Интеграция с другими инструментами и сервисами, такими как Telegram, e-mail </p> 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Совместная работа</template>
     Предоставление мощных инструментов для создания отчетов и дашбордов, которые помогают отслеживать прогресс, производительность и выявлять узкие места.
     Поддержка метрик и KPI для оценки эффективности работы ученика.     
 </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Масштабируемость и производительность</template>
      Обеспечение высокой производительности и масштабируемости для поддержки как для проведения индивидуальных занятий так и групповых.
  </WelcomeItem>
</template>


<!-- 
<a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>.  -->